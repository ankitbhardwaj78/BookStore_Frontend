export class User {
    constructor(public email: string,
                public password: string,
                public name?: string,
                public address?: string,
                public college?: string,
                public phoneNumber?: string) {}
}