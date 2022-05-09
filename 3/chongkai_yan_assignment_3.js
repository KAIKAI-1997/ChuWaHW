const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],

  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

//p1 ans
let column = 0;

function addHead(Head, table) {
  let tr = document.createElement("tr");
  column = Head.length;
  for (i = 0; i < column; i++) {
    let th = document.createElement("th");
    th.textContent = Head[i];
    tr.appendChild(th);
  }

  table.appendChild(tr);
}

function addRows(Body, table) {
  for (i = 0; i < Body.length; i++) {
    let tr = document.createElement("tr");
    for (j = 0; j < column; j++) {
      let td = document.createElement("td");
      const columnname = tableInfo.tableHeader[j];
      td.textContent = Body[i][columnname];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

const addAll = (tableInfo) => {
  const P1Table = document.getElementById("P1Table");
  //check info exist
  if (tableInfo) {
    addHead(tableInfo.tableHeader, P1Table);
    addRows(tableInfo.tableContent, P1Table);
  }
};

addAll(tableInfo);

//p2
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

//p2 ans
const ol = document.querySelector("#p2ol");
const ul = document.querySelector("#p2ul");
console.log(ol);

const add = (list) => {
  list.forEach((element) => {
    let li1 = document.createElement("li");
    li1.textContent = element;
    ul.appendChild(li1);

    let li2 = document.createElement("li");
    li2.textContent = element;
    ol.appendChild(li2);
  });
};

add(list);

//p3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

//p3 ans
const citys = document.querySelector("#citys");
const adddrawdow = (dropDownList) => {
  dropDownList.forEach((element) => {
    let option = document.createElement("option");
    option.value = element.value;
    option.textContent = element.content;
    citys.appendChild(option);
  });
};

adddrawdow(dropDownList);
