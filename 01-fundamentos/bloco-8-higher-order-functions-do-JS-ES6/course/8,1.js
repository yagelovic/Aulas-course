const wakeUp = (string, action) => {
    return ('Acordando!!');
};
const coffe = (string, action) => {
    return ('Bora tomar café!!');
};
const sleep = (string, action) => {
    return ('partiu dormir!!');
};
const doingThings = (callback) => {
    console.log(callback);
};
doingThings(wakeUp());
doingThings(coffe());
doingThings(sleep());
