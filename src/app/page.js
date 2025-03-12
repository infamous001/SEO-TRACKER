import NewDomainForm from "@/components/NewDomainForm";
import DoubleHeader from "@/components/DoubleHeader";
import Image from "next/image";
import DomainRow from "@/components/DomainRow";

export default function Home() {
  return (
    <div>
      <NewDomainForm/>
      <DoubleHeader pretitle={'Your Domains'} mainTitle={'4 Domains'}/>
      <DomainRow/>
      <DomainRow/>
      <DomainRow/>
    </div>
  );
}
