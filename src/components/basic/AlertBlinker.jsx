const AlertBlinker = (updateFunction1, updateFunction2, delay = 3000) => {
    updateFunction1()
    setTimeout(updateFunction2, delay);
}

export default AlertBlinker