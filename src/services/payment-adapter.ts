import { PaymentService } from "application/ports";
import { fakeApi } from "./api";

export function usePayment(): PaymentService {
    return {
        tryPay(amount: PriceCents): Promise<boolean> {
            return fakeApi(true)
        }
    }
}
