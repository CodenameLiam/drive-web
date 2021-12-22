import React, { FC } from "react";
import Page from "../../Components/Page/Page";
import * as Styles from "./DataDeletion.styles";

const DataDeletion: FC = () => {
  return (
    <Page title="Data Deletion">
      <Styles.Container>
        Please email
        <Styles.Link href="mailto:help.driv@gmail.com">
          help.driv@gmail.com
        </Styles.Link>
      </Styles.Container>
    </Page>
  );
};

export default DataDeletion;
