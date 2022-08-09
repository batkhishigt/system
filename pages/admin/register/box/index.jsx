import Layout from "components/Layouts/admin";
import { useState } from "react";
import Tab from "components/Base/Tab/index";
import { useRouter } from "next/router";
import BoxList from "/components/Box/List";
const Index = () => {
  const [createModal, setCreateModal] = useState("");

  const router = useRouter();
  const { tab } = router.query;

  return (
    <Layout>
      <div>
        <Tab activeLink={tab} />
        <BoxList />
      </div>
    </Layout>
  );
};
export default Index;
