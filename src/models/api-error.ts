export class ApiError {
    status: number;
    message: string;

    constructor(i_Status: number, i_Message: string) {
        this.status = i_Status;
        this.message = i_Message;
    }
}