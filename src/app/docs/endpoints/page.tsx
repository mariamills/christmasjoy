import Accordion from "@/components/Accordion";
import endpoints from "@/data/endpoints.json";



function Endpoints() {
    return (
        <div className="">
            <Accordion items={endpoints} />
        </div>
  );
}

export default Endpoints;