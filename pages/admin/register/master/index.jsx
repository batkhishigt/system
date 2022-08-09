import Layout from "components/Layouts/admin";
import { useState } from "react";
import Tab from "components/Base/Tab/index";
import { useRouter } from "next/router";
import MasterList from "/components/Master/List";
const Index = () => {
  const [createModal, setCreateModal] = useState("");

  const router = useRouter();
  const { tab } = router.query;

  return (
    <Layout>
      <div>
        <Tab />
        <MasterList />
      </div>
    </Layout>
  );
};
export default Index;
