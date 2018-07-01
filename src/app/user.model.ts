export class User {
    constructor(public email: string,
                public password: string,
                public name?: string,
                public college?: string,
                public address?: string,
                public phoneNumber?: string) {}
}