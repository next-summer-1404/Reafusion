import Api from "@/lib/Interceptor"

interface sendTicketData {
    id: string;
    houseid: string;
    reservedDates: string[];
    sharedEmail: string;
    sharedMobile: string;
}

export const SendTicket = async (sendTicketData: sendTicketData, token: string) => {
  const response = await Api.post('/api/ticket-notification/send', sendTicketData, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}