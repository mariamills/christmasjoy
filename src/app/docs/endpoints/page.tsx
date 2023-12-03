import Accordion from "@/components/Accordion";
import endpoints from "@/data/endpoints.json";



function Endpoints() {
    return (
        <div className="">
            <div className="">
                <Accordion items={endpoints} />
            </div>
        </div>
  );
}

export default Endpoints;