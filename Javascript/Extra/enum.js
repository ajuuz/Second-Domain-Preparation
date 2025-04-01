const paymentStatus = {
    PENDING:1,
    COMPLETED:2,
    FAILED:3
}

Object.freeze(paymentStatus)
Object.seal(paymentStatus)
paymentStatus.COMPLETED="ajmal"
paymentStatus.new="new value"
console.log(paymentStatus.PENDING)
console.log(paymentStatus)