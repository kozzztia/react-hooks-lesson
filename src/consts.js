
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
        userInon: "https://randomuser.me/api/portraits/men/1.jpg",
        property: "771 Lost Round",
        city: "Sacramento CA",
        moveInDate: "25 February 2020",
        rent: "$3000",
        deposit: "$9000",
        status: "Awaiting Bank Processing",
        color: "yellow"
    },
    {
        userInon: "https://randomuser.me/api/portraits/women/1.jpg",
        property: "1491 Jagged Arbor",
        city: " San Antonio TX",
        moveInDate: "12 March 2020",
        rent: "$2300",
        deposit: "$4600",
        status: "Payment Processed",
        color: "green"
    },
    {
        userInon: "https://randomuser.me/api/portraits/men/2.jpg",
        property: "3021 Pine Ridge",
        city: "Austin TX",
        moveInDate: "01 April 2020",
        rent: "$2800",
        deposit: "$5600",
        status: "Awaiting Approval",
        color: "yellow"
    },
    {
        userInon: "https://randomuser.me/api/portraits/women/2.jpg",
        property: "4812 Oak Avenue",
        city: "Dallas TX",
        moveInDate: "15 May 2020",
        rent: "$3200",
        deposit: "$9600",
        status: "Awaitind",
        color: "yellow"
    },
    {
        userInon: "https://randomuser.me/api/portraits/men/3.jpg",
        property: "2910 Sunset Blvd",
        city: "Houston TX",
        moveInDate: "20 June 2020",
        rent: "$4000",
        deposit: "$12000",
        status: "Payment Processed",
        color: "green"
    },
    {
        userInon: "https://randomuser.me/api/portraits/women/3.jpg",
        property: "1930 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Awaiting Bank Processing",
        color: "yellow"
    },
];

const closeProperties = [
    {
        userInon: "https://randomuser.me/api/portraits/women/4.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Expired: No Payment Received",
        color: "red"
    },
    {
        userInon: "https://randomuser.me/api/portraits/men/4.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Payment Procrssed",
        color: "green"
    },
    {
        userInon: "https://randomuser.me/api/portraits/women/5.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Awaiting Bank Processing",
        color: "yellow"
    },
    {
        userInon: "https://randomuser.me/api/portraits/men/5.jpg",
        property: "1920 Maple Street",
        city: "Miami FL",
        moveInDate: "05 July 2020",
        rent: "$3500",
        deposit: "$10500",
        status: "Awaiting Bank Processing",
        color: "yellow"
    },
];

export { navLinks, tableProperties, activeProperties, closeProperties }