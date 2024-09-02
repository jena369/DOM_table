function create_tr(){
    var ele_tr = document.createElement("tr");
    return ele_tr;
}

function create_th(tagname, attname, attvalue, content){
    var ele_th = document.createElement(tagname)
    ele_th.setAttribute(attname, attvalue)
    ele_th.innerHTML = content;
    return ele_th;
}

function create_td(tagname, content){
    var ele_td = document.createElement(tagname);
    ele_td.innerHTML = content;
    return ele_td;
}

var table = document.createElement("table");
table.className = "table table-hover";
table.style.width = "50%"; // Set table width to 50% of the parent container
table.style.margin = "20px auto"; // Center table and add vertical margin of 20px
table.style.borderCollapse = "separate"; // Ensure spacing around the table
table.style.borderSpacing = "10px"; // Add spacing between cells if needed

var table_head = document.createElement("thead");
table_head.className = "thead-dark";

var table_body = document.createElement("tbody");

var thead_tr = create_tr()

var th_1 = create_th("th", "scope", "col", "#");
var th_2 = create_th("th", "scope", "col", "First");
var th_3 = create_th("th", "scope", "col", "Last");
var th_4 = create_th("th", "scope", "col", "Handle");


thead_tr.append(th_1, th_2, th_3, th_4)
table_head.append(thead_tr)

var tbody_tr = create_tr()
var td_1 = create_th("th", "scope", "row", "1")
var td_2 = create_td("td", "Lalith")
var td_3 = create_td("td", "Kumar")
var td_4 = create_td("td", "@laithkiddo")

var tbody_tr2 = create_tr()

var td_5 = create_th("th", "scope", "row", "2")
var td_6 = create_td("td", "Jenarthanan")
var td_7 = create_td("td", "V")
var td_8 = create_td("td", "@jena369")



var tbody_tr3 = create_tr()

var td_9 = create_th("th", "scope", "row", "3")
var td_10 = create_td("td", "Harshavadhan")
var td_11 = create_td("td", "CK")
var td_12 = create_td("td", "@Harsha")


var tbody_tr4 = create_tr()

var td_13 = create_th("th", "scope", "row", "3")
var td_14 = create_td("td", "Heman")
var td_15 = create_td("td", "Padvas")
var td_16 = create_td("td", "@Heman123")


tbody_tr.append(td_1, td_2, td_3, td_4)
tbody_tr2.append(td_5, td_6, td_7, td_8)
tbody_tr3.append(td_9, td_10, td_11, td_12)
tbody_tr4.append(td_13, td_14, td_15, td_16)


table_body.append(tbody_tr, tbody_tr2, tbody_tr3, tbody_tr4)
table.append(table_head, table_body)
document.body.append(table)



