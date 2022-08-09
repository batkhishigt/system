import Layout from "components/Layouts/admin";
import Tab from "components/Base/Tab/index";
import CreateAndEditForm from "components/Box/createAndEditForm";
const Index = () => {
  return (
    <Layout>
      <div>
        <Tab />
        <CreateAndEditForm isCreate={true} />
      </div>
    </Layout>
  );
};
export default Index;
