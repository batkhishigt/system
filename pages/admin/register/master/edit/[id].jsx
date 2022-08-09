import Layout from "components/Layouts/admin";
import Tab from "components/Base/Tab/index";
// import CreateAndEditFormMaster from "/components/master/createAndEditFormMaster";
const Index = () => {
  return (
    <Layout>
      <div>
        <Tab />
        {/* <CreateAndEditFormMaster isCreate={false} /> */}
      </div>
    </Layout>
  );
};
export default Index;
