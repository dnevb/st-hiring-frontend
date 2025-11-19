import {
  Card,
  CardContent,
  CircularProgress,
  List,
  Typography,
} from "@mui/material";
import { useListEventsQuery } from "../../store";

export default function EventListPage() {
  const { data, isLoading } = useListEventsQuery();

  if (isLoading) return <CircularProgress />;

  return (
    <List>
      <Typography variant="h4" gutterBottom>
        Event List
      </Typography>
      {data?.map((item) => (
        <Card key={item.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Date: {item.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Location: {item.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Available Tickets: {item.availableTickets?.length}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </List>
  );
}
