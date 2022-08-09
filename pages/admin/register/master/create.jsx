import Layout from "components/Layouts/admin";
import Tab from "components/Base/Tab/index";
// import CreateAndEditFormMaster from "/components/Master/createAndEditFormMaster";
const Index = () => {
  return (
    <Layout>
      <div>
        <Tab />
        {/* <CreateAndEditFormMaster isCreate={true} /> */}
      </div>
    </Layout>
  );
};
export default Index;
