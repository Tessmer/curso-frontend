
import { format } from "date-fns";

const formatDate = (date) => {
    const data = format(date, "dd/MM/yyyy")
    return data
}

export { formatDate }
