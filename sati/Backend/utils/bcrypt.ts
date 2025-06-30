import bcrypt from "bcrypt";

export const hashPassword = (password: string) => {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
};

export const comparePassword = (password: string, dbPass: string) => {
    const match = bcrypt.compare(password, dbPass);
    if (match) return true;
    return false;
};

//test
export const testAuth = (password: string, dbPass: string) => {
    if (password === dbPass) {
        return true;
    }
    return false;
};
