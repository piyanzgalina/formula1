export const yearsOptions = [];

for (let i = 2024; i >= 1950; i--) {
    let obj = {};
    obj['label'] = i;
    obj['value'] = i;

    yearsOptions.push(obj);
}
