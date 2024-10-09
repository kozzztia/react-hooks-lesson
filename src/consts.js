
const navLinks = [
    { id: "1", name: "home", path: "/" },
    { id: "2", name: "deposits", path: "/deposits" },
    { id: "3", name: "offers", path: "/offers" },
    { id: "5", name: "payments", path: "/payments" },
    { id: "6", name: "settings", path: "/settings" },
];

const tableProperties = [
    { id: "1", property: "Property" },
    { id: "2", property: "Move-in Date" },
    { id: "3", property: "Rent" },
    { id: "4", property: "Deposit" },
    { id: "5", property: "Status" },
]
const activeProperties = [
    {
        id: "1",
        userIcon: "https://randomuser.me/api/portraits/men/1.jpg",
        property: "771 Lost Round",
        city: "Sacramento CA",
        moveInDate: "25 February 2020",
        rent: "$3000",
        deposit: "$9000",
        status: "Awaiting Bank Processing",
        color: "yellow"
    },
    {
        id: "2",
        userIcon: "https://randomuser.me/api/portraits/women/1.jpg",
        property: "1491 Jagged Arbor",
        city: " San Antonio TX",
        moveInDate: "12 March 2020",
        rent: "$2300",
        deposit: "$4600",
        status: "Payment Processed",
        color: "green"
    },
    {
        id: "3",
        userIcon: "https://randomuser.me/api/portraits/men/2.jpg",
        property: "3021 Pine Ridge",
        city: "Austin TX",
        moveInDate: "01 April 2020",
        rent: "$2800",
        deposit: "$5600",
        status: "Awaiting Approval",
        color: "yellow"
    },
    {
        id: "4",
        userIcon: "https://randomuser.me/api/portraits/women/2.jpg",
        property: "4812 Oak Avenue",
        city: "Dallas TX",
        moveInDate: "15 May 2020",
        rent: "$3200",
        deposit: "$9600",
        status: "Awaitind",
        color: "yellow"
    },
    {
        id: "5",
        userIcon: "https://randomuser.me/api/portraits/men/3.jpg",
        property: "2910 Sunset Blvd",
        city: "Houston TX",
        moveInDate: "20 June 2020",
        rent: "$4000",
        deposit: "$12000",
        status: "Payment Processed",
        color: "green"
    },
    {
        id: "6",
        userIcon: "https://randomuser.me/api/portraits/women/3.jpg",
        property: "1930 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Awaiting Bank Processing",
        color: "yellow"
    },
    {
        id: "12",
        userIcon: "https://randomuser.me/api/portraits/men/4.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Payment Procrssed",
        color: "green"
    },
    {
        id: "13",
        userIcon: "https://randomuser.me/api/portraits/women/4.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Expired: No Payment Received",
        color: "red"
    },
    {
        id: "14",
        userIcon: "https://randomuser.me/api/portraits/men/5.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Payment Procrssed",
        color: "green"
    },
    {
        id: "15",
        userIcon: "https://randomuser.me/api/portraits/women/5.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Expired: No Payment Received",
        color: "red"
    },
];

const closeProperties = [
    {
        id: "7",
        userIcon: "https://randomuser.me/api/portraits/women/4.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Expired: No Payment Received",
        color: "red"
    },
    {
        id: "8",
        userIcon: "https://randomuser.me/api/portraits/men/4.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Payment Procrssed",
        color: "green"
    },
    {
        id: "9",
        userIcon: "https://randomuser.me/api/portraits/women/5.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Awaiting Bank Processing",
        color: "yellow"
    },
    {
        id: "10",
        userIcon: "https://randomuser.me/api/portraits/men/5.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Awaiting Bank Processing",
        color: "yellow"
    },
    {
        id: "11",
        userIcon: "https://randomuser.me/api/portraits/women/6.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Expired: No Payment Received",
        color: "red"
    }
];

export { navLinks, tableProperties, activeProperties, closeProperties }