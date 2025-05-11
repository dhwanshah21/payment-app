import { formatCurrency } from './utils';
import { contacts, activity, user, pays } from "@/app/lib/placeholder-data";

export async function fetchActivity() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    await new Promise((resolve) => setTimeout(resolve, getRandomMillis(3)));

    return activity;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch activity data.');
  }
}

export async function fetchLatestPays(userId: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, getRandomMillis(3)));

    // TODO: return latest pays data joined with contacts
    const top6Pays =  pays
      .filter((pay) => pay.senderId === userId || pay.receiverId === userId)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .map((pay) => {
        const otherPartyId = pay.senderId === userId ? pay.receiverId : pay.senderId;
        const contact = contacts.find((c) => c.id === otherPartyId);

        return {
          id: pay.id,
          name: contact?.name ?? 'Unknown',
          image_url: contact?.image_url ?? '',
          email: contact?.email ?? '',
          amount: pay.amount,
          note: pay?.note
        };
      });

      return top6Pays.slice(0, 6);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest pays.');
  }
}

export async function fetchCardData() {
  try {
    await Promise.all([
      new Promise((resolve) => setTimeout(resolve, getRandomMillis(3))),
      new Promise((resolve) => setTimeout(resolve, getRandomMillis(3))),
      new Promise((resolve) => setTimeout(resolve, getRandomMillis(3))),
    ]);

    const numberOfPays = pays.length;
    const numberOfContacts = contacts.length;

    // Calculate total paid and pending in cents
    const totalPaidPays = formatCurrency(
      pays.filter(pay => pay.status === 'paid').reduce((sum, pay) => sum + pay.amount, 0)
    );

    const totalPendingPays = formatCurrency(
      pays.filter(pay => pay.status === 'pending').reduce((sum, pay) => sum + pay.amount, 0)
    );

    return {
      numberOfContacts,
      numberOfPays,
      totalPaidPays,
      totalPendingPays,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredPays(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    // Join pays with contacts and filter by search query
    const filteredPays = pays.filter(pay => pay.senderId === user.id || pay.receiverId === user.id);

    let paysTablefinalResults = filteredPays.map(pay => {
      const contactId = pay.senderId === user.id ? pay.receiverId : pay.senderId;
      const contact = contacts.find(c => c.id === contactId);
      return {
        id: pay.id,
        contact_id: contactId,
        name: contact!.name,
        email: contact!.email,
        image_url: contact?.image_url ?? '',
        date: pay.timestamp,
        amount: pay.amount,
        status: pay.status,
        note: pay.note ?? '',
      };
    });

    // Filter by query (check name, email, amount, or note)
    paysTablefinalResults = paysTablefinalResults.filter(payTableEntry => {
      return (
        payTableEntry.name.toLowerCase().includes(query.toLowerCase()) ||
        payTableEntry.email.toLowerCase().includes(query.toLowerCase()) ||
        payTableEntry.amount.toString().includes(query) ||
        (payTableEntry.note && payTableEntry.note.toLowerCase().includes(query.toLowerCase()))
      );
    });

    // Return paginated results
    return paysTablefinalResults.slice(offset, offset + ITEMS_PER_PAGE);
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pays.');
  }
}

export async function fetchPaysPages(query: string) {
  // TODO: filter the related pay joined data for the query string passed to find this value
  try {
    // Filter pays with the same logic as above
    const filteredPays = pays
      .map(pay => {
        const contact = contacts.find(c => c.id === pay.senderId || c.id === pay.receiverId);
        if (contact) {
          return {
            id: pay.id,
            name: contact.name,
            email: contact.email,
            amount: pay.amount,
            note: pay.note
          };
        }
      })
      .filter(pay => {
        if (!pay) return;
        return (
          pay.name.toLowerCase().includes(query.toLowerCase()) ||
          pay.email.toLowerCase().includes(query.toLowerCase()) ||
          pay.amount.toString().includes(query) ||
          (pay.note && pay.note.toLowerCase().includes(query.toLowerCase()))
        );
      });

    // Calculate total pages
    return Math.ceil(filteredPays.length / ITEMS_PER_PAGE);
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of pays.');
  }
}

export async function fetchPayById(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, getRandomMillis(3)));

    // Find the pay by id
    const pay = pays.find(pay => pay.id === id);
    
    if (!pay) {
      return null;
    }

    // Determine if the user is the sender or receiver
    const contactId = pay.senderId === user.id ? pay.receiverId : pay.senderId;

    // Format for the edit form
    return {
      id: pay.id,
      contact_id: contactId,
      amount: pay.amount,
      status: pay.status,
      note: pay.note || ''
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pay.');
  }
}

export async function fetchContacts() {
  try {
    return contacts;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all contacts.');
  }
}

export async function fetchFilteredContacts(query: string) {
  try {

    const lowerCaseQuery = query.toLowerCase();

    return contacts
      .filter(({ name, email }) =>
        name.toLowerCase().includes(lowerCaseQuery) || email.toLowerCase().includes(lowerCaseQuery)
      )
      .map((contact) => {
        // Filter relevant pays once, instead of multiple times
        const relevantPays = pays.filter(({ senderId, receiverId }) =>
          (senderId === user.id && receiverId === contact.id) ||
          (receiverId === user.id && senderId === contact.id)
        );

        const total_pays = relevantPays.length;
        const total_pending = relevantPays.filter(p => p.status === 'pending').length;
        const total_paid = relevantPays.filter(p => p.status === 'paid').length;

        return {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          image_url: contact.image_url,
          total_pays,
          total_pending,
          total_paid
        };
      });
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch contact table.');
  }
}

// Fix type for max
function getRandomMillis(max: any) {
  return Math.random() * max * 1000;
}