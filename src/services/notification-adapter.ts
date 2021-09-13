import { NotificationService } from "application/ports";

export function useNotification(): NotificationService {
    return {
        notify(message) {
            window.alert(message)
        }
    }
}
