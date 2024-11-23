"use strict";
const bills = [
    { billId: 153, billTitle: "Testing Attachment", billStatusCode: "DECLINED", memberCount: "0", amount: "30" },
    { billId: 153, billTitle: "Testing Attachment", billStatusCode: "PAID", memberCount: "0", amount: "30" },
    { billId: 153, billTitle: "Testing Attachment", billStatusCode: "PENDING", memberCount: "24", amount: "30" },
    { billId: 114, billTitle: "Testing Upload Image", billStatusCode: "DECLINED", memberCount: "0", amount: "2" },
    { billId: 114, billTitle: "Testing Upload Image", billStatusCode: "PAID", memberCount: "0", amount: "2" },
    { billId: 114, billTitle: "Testing Upload Image", billStatusCode: "PENDING", memberCount: "24", amount: "2" },
    { billId: 112, billTitle: "new", billStatusCode: "DECLINED", memberCount: "0", amount: "12" },
    { billId: 112, billTitle: "new", billStatusCode: "PAID", memberCount: "0", amount: "12" },
    { billId: 112, billTitle: "new", billStatusCode: "PENDING", memberCount: "0", amount: "12" }
];
const groupedBills = [];
const billMap = new Map();
bills.forEach(bill => {
    if (!billMap.has(bill.billId)) {
        billMap.set(bill.billId, {
            billId: bill.billId,
            billTitle: bill.billTitle,
            chartData: []
        });
    }
    billMap.get(bill.billId).chartData.push({
        name: bill.billStatusCode,
        value: +bill.memberCount
    });
});
groupedBills.push(...Array.from(billMap.values()));
console.log(groupedBills);
