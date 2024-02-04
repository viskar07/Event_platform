import EventForm from "@/components/shared/EventForm"
import { getEventById } from "@/lib/actions/event.action";
import { auth } from "@clerk/nextjs";
 
type UpdateEventProps = {
  params:{
    id:string
  }
}

const CreateEvent = async ({ params :{id}}: UpdateEventProps) => {
  const event = await getEventById(id);

  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm event={event} eventId={event._id} type="Update" userId={userId}/>
      </div>
    </>
  )
}

export default CreateEvent