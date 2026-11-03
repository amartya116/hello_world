import React from "react";
import { TableBlock } from "../components/runtime/TableBlock";
import { MethodButton } from "../components/MethodButton";

const Helloworld: React.FC = () => {
  return (
    <div id="page-helloworld-0">
    <div id="ij9j" style={{"height": "100vh", "fontFamily": "Arial, sans-serif", "display": "flex", "--chart-color-palette": "default"}}>
      <nav id="irvo" style={{
          "width": "250px",
          "padding": "20px",
          "display": "flex",
          "overflowY": "auto",
          "background": "linear-gradient(135deg, #4b3c82 0%, #5a3d91 100%)",
          "color": "white",
          "--chart-color-palette": "default",
          "flexDirection": "column"
        }}>
        <h2 id="ilye" style={{"fontSize": "24px", "fontWeight": "bold", "marginTop": "0", "marginBottom": "30px", "--chart-color-palette": "default"}}>{"BESSER"}</h2>
        <div id="i7usp" style={{"display": "flex", "--chart-color-palette": "default", "flexDirection": "column", "flex": "1"}}>
          <a id="ipzwj" style={{
              "padding": "10px 15px",
              "textDecoration": "none",
              "marginBottom": "5px",
              "display": "block",
              "background": "rgba(255,255,255,0.2)",
              "color": "white",
              "borderRadius": "4px",
              "--chart-color-palette": "default"
            }} href="/helloworld">{"HelloWorld"}</a>
        </div>
        <p id="ijsqf" style={{
            "fontSize": "11px",
            "paddingTop": "20px",
            "marginTop": "auto",
            "textAlign": "center",
            "opacity": "0.8",
            "borderTop": "1px solid rgba(255,255,255,0.2)",
            "--chart-color-palette": "default"
          }}>{"© 2026 BESSER. All rights reserved."}</p>
      </nav>
      <main id="i8mw4" style={{"padding": "40px", "overflowY": "auto", "background": "#f5f5f5", "--chart-color-palette": "default", "flex": "1"}}>
        <h1 id="icetx" style={{"fontSize": "32px", "marginTop": "0", "marginBottom": "10px", "color": "#333", "--chart-color-palette": "default"}}>{"HelloWorld"}</h1>
        <p id="ifgg1" style={{"marginBottom": "30px", "color": "#666", "--chart-color-palette": "default"}}>{"Manage HelloWorld data"}</p>
        <TableBlock id="table-helloworld-0" className="has-data-binding" styles={{"width": "100%", "minHeight": "400px", "--chart-color-palette": "default"}} title="HelloWorld List" options={{
            "showHeader": true,
            "stripedRows": false,
            "showPagination": true,
            "rowsPerPage": 5,
            "actionButtons": true,
            "columns": [
              {
                "label": "Id",
                "column_type": "field",
                "field": "id",
                "type": "int",
                "required": true
              }
            ]
          }} dataBinding={{"entity": "HelloWorld", "endpoint": "/helloworld/", "row_key_fields": ["id"]}} />
        <div id="ijnln" style={{"marginTop": "20px", "display": "flex", "--chart-color-palette": "default", "flexWrap": "wrap", "gap": "10px"}}>
          <MethodButton id="iu57o" className="action-button-component" style={{
              "padding": "6px 14px",
              "fontSize": "13px",
              "fontWeight": "600",
              "textDecoration": "none",
              "letterSpacing": "0.01em",
              "display": "flex",
              "cursor": "pointer",
              "transition": "background 0.2s",
              "background": "linear-gradient(90deg, #2563eb 0%, #1e40af 100%)",
              "color": "#fff",
              "borderRadius": "4px",
              "border": "none",
              "boxShadow": "0 1px 4px rgba(37,99,235,0.10)",
              "--chart-color-palette": "default",
              "alignItems": "center"
            }} endpoint="/helloworld/{helloworld_id}/methods/showHelloWorld/" label="showHelloWorld" isInstanceMethod={true} instanceSourceTableId="table-helloworld-0" />
        </div>
      </main>
    </div>    </div>
  );
};

export default Helloworld;
