export const calculateAge = (birthday: Date | string | number) => {

    const _birthday = new Date(birthday)

    var ageDifMs = Date.now() - _birthday.getTime();
    var ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
