import bcrypt from "bcrypt";

export const hashPassword = (password: string) => {
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
};

export const comparePassword = async (password: string, dbPass: string) => {
    const match = await bcrypt.compare(password, dbPass);
    return match;
};

//test
export const testAuth = (password: string, dbPass: string) => {
    if (password === dbPass) {
        return true;
    }
    return false;
};
