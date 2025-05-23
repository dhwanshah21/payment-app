import { Pay, PayStatus } from "./definitions";

export const paysData: Pay[] = [
    {
      "id": "29ec95ac-c0e7-4188-b4b2-acf6db4eb4b2",
      "amount": 2000,
      "status": PayStatus.Paid,
      "note": "Restaurant",
      "timestamp": "2025-05-13T02:22:36.608Z",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9"
    },
    {
      "id": "41bc8f4a-9b92-4bb9-9d0b-dd296f8c697c",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
      "amount": 42834,
      "status": PayStatus.Pending,
      "note": "Grocery",
      "timestamp": "2024-01-05T02:01:37.150Z"
    },
    {
      "id": "09a374e1-3ebb-4232-9df5-9070085be267",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
      "amount": 18428,
      "status": PayStatus.Paid,
      "note": "Grocery",
      "timestamp": "2024-01-23T04:08:02.456Z"
    },
    {
      "id": "f9cc9075-2463-4c6b-bc39-6ba0f50718b1",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
      "amount": 35575,
      "status": PayStatus.Paid,
      "note": "Restaurants",
      "timestamp": "2024-01-15T17:37:29.901Z"
    },
    {
      "id": "84d5c963-9a74-4026-bb7c-d8b92755cc61",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
      "amount": 16426,
      "status": PayStatus.Pending,
      "note": "Dinner",
      "timestamp": "2024-01-17T06:24:17.029Z"
    },
    {
      "id": "31c34654-9158-4877-b928-a4f146d4a0de",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
      "amount": 32257,
      "status": PayStatus.Pending,
      "note": "Dinner",
      "timestamp": "2024-02-02T13:25:48.615Z"
    },
    {
      "id": "b9ef603c-9d68-4c40-91e3-1948f0e5b8f7",
      "senderId": "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 14515,
      "status": PayStatus.Pending,
      "note": "Park Tickets",
      "timestamp": "2024-02-25T09:14:03.072Z"
    },
    {
      "id": "0dc1ef29-bd46-4f91-80d2-151dba46eca3",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
      "amount": 14549,
      "status": PayStatus.Paid,
      "note": "Movie",
      "timestamp": "2024-02-21T10:22:59.292Z"
    },
    {
      "id": "0e5e450c-7b2f-41eb-baa7-8e9e05a7261d",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
      "amount": 42477,
      "status": PayStatus.Pending,
      "note": "Restaurants",
      "timestamp": "2024-02-09T03:41:52.917Z"
    },
    {
      "id": "6bc6006d-ebc8-413d-8436-6f365d9e56a9",
      "senderId": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 20916,
      "status": PayStatus.Paid,
      "note": "Movie",
      "timestamp": "2024-03-12T00:41:00.029Z"
    },
    {
      "id": "b434bfc5-b424-4d1f-94a9-2464d124294a",
      "senderId": "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 49351,
      "status": PayStatus.Pending,
      "note": "Grocery",
      "timestamp": "2024-03-27T04:09:08.707Z"
    },
    {
      "id": "860b373d-9e46-4011-8f52-358a5a458b91",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "76d65c26-f784-44a2-ac19-586678f7c2f2",
      "amount": 44510,
      "status": PayStatus.Paid,
      "note": "Movie",
      "timestamp": "2024-03-14T08:09:49.169Z"
    },
    {
      "id": "c2464e36-36af-4666-868d-25284717a69f",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
      "amount": 25960.000000000004,
      "status": PayStatus.Paid,
      "note": "Restaurants",
      "timestamp": "2024-03-17T18:10:34.426Z"
    },
    {
      "id": "eac49700-277a-4e00-b3e5-570ca609417a",
      "senderId": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 48000,
      "status": PayStatus.Paid,
      "note": "Grocery",
      "timestamp": "2024-04-21T10:33:56.495Z"
    },
    {
      "id": "5d0b9ce8-7e6a-48bb-806c-db5f7c18312d",
      "senderId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 38067,
      "status": PayStatus.Pending,
      "note": "Restaurants",
      "timestamp": "2024-04-09T03:52:41.416Z"
    },
    {
      "id": "5618dfd0-6fe4-4b30-91ed-10e1ff6343f8",
      "senderId": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 41837,
      "status": PayStatus.Pending,
      "note": "Movie",
      "timestamp": "2024-04-26T03:34:27.861Z"
    },
    {
      "id": "e39281aa-5e91-4c5b-ae4c-410845a99d73",
      "senderId": "76d65c26-f784-44a2-ac19-586678f7c2f2",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 49223,
      "status": PayStatus.Pending,
      "note": "Movie",
      "timestamp": "2024-04-23T11:14:49.086Z"
    },
    {
      "id": "6fd43a82-907c-4a85-b0be-d9a72d846fd1",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
      "amount": 18601,
      "status": PayStatus.Pending,
      "note": "Dinner",
      "timestamp": "2024-05-14T05:43:21.737Z"
    },
    {
      "id": "850b89c5-dd17-4c4e-9510-588d93adbc03",
      "senderId": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 8002,
      "status": PayStatus.Paid,
      "note": "Restaurants",
      "timestamp": "2024-05-15T17:56:35.648Z"
    },
    {
      "id": "df44017d-11ff-42d7-9e52-19a7d2e12d80",
      "senderId": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 18964,
      "status": PayStatus.Pending,
      "note": "Restaurants",
      "timestamp": "2024-05-04T06:19:32.046Z"
    },
    {
      "id": "01f58708-12e5-44d9-81cb-8b722c9daf11",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
      "amount": 47837,
      "status": PayStatus.Paid,
      "note": "Dinner",
      "timestamp": "2024-05-17T03:28:54.255Z"
    },
    {
      "id": "7b9c8af8-21a6-40dd-9bd8-38a12edcea12",
      "senderId": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 41502,
      "status": PayStatus.Pending,
      "note": "Dinner",
      "timestamp": "2024-06-21T18:32:08.144Z"
    },
    {
      "id": "e2537fd2-85d7-4eac-9bd4-0851d66a8f24",
      "senderId": "76d65c26-f784-44a2-ac19-586678f7c2f2",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 6420.999999999999,
      "status": PayStatus.Pending,
      "note": "Park Tickets",
      "timestamp": "2024-06-03T12:41:06.607Z"
    },
    {
      "id": "4a5794cb-6778-4db3-89d4-ef3667772b51",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "76d65c26-f784-44a2-ac19-586678f7c2f2",
      "amount": 21332,
      "status": PayStatus.Pending,
      "note": "Restaurants",
      "timestamp": "2024-06-07T04:04:49.948Z"
    },
    {
      "id": "cecf1f1e-d53e-40dc-8b7c-bb92214b92b4",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
      "amount": 28169,
      "status": PayStatus.Paid,
      "note": "Grocery",
      "timestamp": "2024-06-16T15:00:17.424Z"
    },
    {
      "id": "0dad208e-764c-4ccf-87c0-c33f60403411",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
      "amount": 27300,
      "status": PayStatus.Paid,
      "note": "Restaurants",
      "timestamp": "2024-07-09T14:22:56.083Z"
    },
    {
      "id": "c9907f6e-b662-4293-9c55-d8fa36c5a4f9",
      "senderId": "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 10600,
      "status": PayStatus.Paid,
      "note": "Dinner",
      "timestamp": "2024-07-06T04:42:50.749Z"
    },
    {
      "id": "251a5aeb-5149-4c52-b716-4fd5dba45f31",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
      "amount": 13440,
      "status": PayStatus.Pending,
      "note": "Movie",
      "timestamp": "2024-07-11T03:21:03.181Z"
    },
    {
      "id": "381198a1-b3d0-449d-a638-f0e01b36a12d",
      "senderId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 31406,
      "status": PayStatus.Pending,
      "note": "Restaurants",
      "timestamp": "2024-07-19T06:06:21.344Z"
    },
    {
      "id": "beba2cee-09bc-4674-8524-d10d65de0745",
      "senderId": "76d65c26-f784-44a2-ac19-586678f7c2f2",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 32608.999999999996,
      "status": PayStatus.Pending,
      "note": "Park Tickets",
      "timestamp": "2024-08-19T16:24:20.305Z"
    },
    {
      "id": "b9e42630-b24d-4e0b-a551-f48c93d429aa",
      "senderId": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 46097,
      "status": PayStatus.Paid,
      "note": "Grocery",
      "timestamp": "2024-08-18T08:49:55.738Z"
    },
    {
      "id": "d1d61c77-fdfd-4319-9191-4723715d7ba8",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
      "amount": 17388,
      "status": PayStatus.Paid,
      "note": "Dinner",
      "timestamp": "2024-08-09T20:20:52.108Z"
    },
    {
      "id": "8d5c1fc3-7756-412a-844c-2d909de144b7",
      "senderId": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 6984.999999999999,
      "status": PayStatus.Pending,
      "note": "Grocery",
      "timestamp": "2024-08-12T06:59:01.187Z"
    },
    {
      "id": "a3443af0-4a97-41e3-a536-ecc397103c27",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
      "amount": 41144,
      "status": PayStatus.Pending,
      "note": "Movie",
      "timestamp": "2024-09-26T17:35:05.571Z"
    },
    {
      "id": "a4fe9b2e-26fb-4f5b-82d5-45cfe76cbe9d",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
      "amount": 24195,
      "status": PayStatus.Paid,
      "note": "Dinner",
      "timestamp": "2024-09-14T16:05:57.272Z"
    },
    {
      "id": "62a3b997-6081-477c-a14b-4f4fe6e09e31",
      "senderId": "3958dc9e-712f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 47476,
      "status": PayStatus.Paid,
      "note": "Park Tickets",
      "timestamp": "2024-09-21T18:23:13.280Z"
    },
    {
      "id": "0821ba5a-ceec-45d8-8277-18eb49b704ef",
      "senderId": "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 49562,
      "status": PayStatus.Paid,
      "note": "Movie",
      "timestamp": "2024-09-22T02:41:24.158Z"
    },
    {
      "id": "ddceeb6f-1bd6-4682-84dc-50a2510f15b8",
      "senderId": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 19671,
      "status": PayStatus.Pending,
      "note": "Movie",
      "timestamp": "2024-10-03T08:52:38.137Z"
    },
    {
      "id": "19719976-2732-41db-b66d-b1628c0534b2",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
      "amount": 25932,
      "status": PayStatus.Paid,
      "note": "Dinner",
      "timestamp": "2024-10-01T12:16:44.211Z"
    },
    {
      "id": "01bdce4a-9b18-451c-adbf-d3922a564647",
      "senderId": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 43331,
      "status": PayStatus.Paid,
      "note": "Park Tickets",
      "timestamp": "2024-10-04T02:04:44.147Z"
    },
    {
      "id": "53de7a77-e64c-4ac6-888d-ca2e73f3fe4b",
      "senderId": "76d65c26-f784-44a2-ac19-586678f7c2f2",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 12517,
      "status": PayStatus.Pending,
      "note": "Park Tickets Yellowstone",
      "timestamp": "2025-05-13T05:26:13.213Z"
    },
    {
      "id": "c23c0361-b36f-4c76-b8c8-7ea2f7187ec7",
      "senderId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 37408,
      "status": PayStatus.Paid,
      "note": "Restaurants",
      "timestamp": "2024-11-06T09:29:55.787Z"
    },
    {
      "id": "2b948d4c-ae25-4276-9e71-baf3f06952b7",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
      "amount": 12988.999999999998,
      "status": PayStatus.Paid,
      "note": "Grocery",
      "timestamp": "2024-11-14T21:36:41.846Z"
    },
    {
      "id": "5c13e57d-f27a-4c4e-a437-c2a3469f0fa0",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "3958dc9e-742f-4377-85e9-fec4b6a6442a",
      "amount": 14428,
      "status": PayStatus.Pending,
      "note": "Restaurants",
      "timestamp": "2024-11-14T16:23:41.831Z"
    },
    {
      "id": "20cbb59a-9565-47f2-8410-b86ca1d9ecf2",
      "senderId": "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 17032,
      "status": PayStatus.Paid,
      "note": "Movie",
      "timestamp": "2024-11-07T01:33:12.491Z"
    },
    {
      "id": "135c34f2-6579-4b6a-a070-5cd08460c362",
      "senderId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 41284,
      "status": PayStatus.Pending,
      "note": "Movie Tickets 12th March",
      "timestamp": "2025-05-13T06:03:17.187Z"
    },
    {
      "id": "4ee6f4d0-7d9b-4ff4-a140-5f75e5981afc",
      "senderId": "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
      "receiverId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "amount": 36667,
      "status": PayStatus.Paid,
      "note": "Grocery",
      "timestamp": "2024-12-07T02:14:32.030Z"
    },
    {
      "id": "f7ee745f-cd6e-4678-b646-d6e9fbdab7bc",
      "senderId": "410544b2-4001-4271-9855-fec4b6a6442a",
      "receiverId": "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
      "amount": 34394,
      "status": PayStatus.Paid,
      "note": "Park Tickets",
      "timestamp": "2024-12-19T22:16:38.440Z"
    }
  ]