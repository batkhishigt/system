import Layout from "components/Layouts/admin";
import Tab from "components/Base/Tab/index";
// import { useRouter } from "next/router";
import CreateAndEditForm from "../../../../../components/Box/createAndEditForm";
const Index = () => {
  return (
    <Layout>
      <div>
        <Tab />
        <CreateAndEditForm isCreate={false} />
      </div>
    </Layout>
  );
};
export default Index;
