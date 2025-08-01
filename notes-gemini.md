event screen should have option to add term(one or many) for each event.
each term should have start and end time, required personnel (doctor, technician, nurse...), description

---
### `EventList` Component Enhancement: Optimistic UI

For a better user experience in the `EventList` component, consider implementing an "optimistic update" when deleting an event. This will make the UI feel faster by removing the item from the list immediately, before waiting for the server response.

Here's an example of how to modify the `useSWRMutation` hook:

```javascript
const { trigger: triggerDelete } = useSWRMutation(
    'http://localhost:8080/api/events',
    deleteEvent,
    {
        // Optimistically update the local cache
        optimisticData: (currentEvents, { event: deletedEvent }) => {
            if (!currentEvents) return [];
            return currentEvents.filter(event => event.id !== deletedEvent.id);
        },
        // Revalidate the data from the server upon success
        onSuccess: () => {
            mutate();
        },
        // If the mutation fails, the optimistic update is automatically rolled back.
    }
);
```