const apiData = [
  { id:36, name:"Hacienda Nápoles",         image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/P%C3%B3rtico_Hacienda_N%C3%A1poles.JPG/800px-P%C3%B3rtico_Hacienda_N%C3%A1poles.JPG",       city:"Puerto Triunfo",     deptId:2  },
  { id:34, name:"Santa Fe de Antioquia",    image:"https://colombia.travel/sites/default/files/sanpedroclavel.jpg",                                                                                           city:"Santafé de Antioquia",deptId:2  },
  { id:29, name:"Parque Arví",              image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/MetrocableArv%C3%AD1.JPG/270px-MetrocableArv%C3%AD1.JPG",                                       city:"Medellín",           deptId:2  },
  { id:18, name:"Museo El Castillo",        image:"https://lanzateyviaja.com/wp-content/uploads/2019/04/Musio-el-Castillo-Colombia.jpg",                                                                      city:"Medellín",           deptId:2  },
  { id:7,  name:"Guatapé",                  image:"https://cdn.colombia.com/images/v2/turismo/sitios-turisticos/medellin/guatape-paisaje-antioquia-800.webp",                                                 city:"Medellín",           deptId:2  },
  { id:39, name:"Jericó",                   image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Jeric%C3%B3%2C_Antioquia%2C_Colombia.JPG/800px-Jeric%C3%B3%2C_Antioquia%2C_Colombia.JPG",      city:"Jericó",             deptId:2  },
  { id:17, name:"La Ventana del Mundo",     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ventanalmundo.jpg/320px-Ventanalmundo.jpg",                                                      city:"Barranquilla",       deptId:4  },
  { id:20, name:"Cerro de Monserrate",      image:"https://www.colombia.co/wp-content/uploads/2018/04/shutterstock_645025201-1024x683.jpg",                                                                   city:"Bogotá D.C.",        deptId:5  },
  { id:1,  name:"Museo del Oro",            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/BOG_Museo_del_Oro.JPG/800px-BOG_Museo_del_Oro.JPG",                                             city:"Bogotá D.C.",        deptId:5  },
  { id:19, name:"Volcán del Totumo",        image:"https://lanzateyviaja.com/wp-content/uploads/2019/04/Volcan-del-Totumo-Colombia.jpg",                                                                      city:"Santa Catalina",     deptId:6  },
  { id:32, name:"Ciudad Amurallada",        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Cartagena_Walled_City.jpg/800px-Cartagena_Walled_City.jpg",                                     city:"Cartagena",          deptId:6  },
  { id:10, name:"Castillo San Felipe",      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/71_-_Carthag%C3%A8ne_-_D%C3%A9cembre_2008.jpg/1024px-71_-_Carthag%C3%A8ne_-_D%C3%A9cembre_2008.jpg", city:"Cartagena",    deptId:6  },
  { id:4,  name:"Lago de Tota",             image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Lago_de_Tota%2C_sector_municipio_de_Tota.jpg/1280px-Lago_de_Tota%2C_sector_municipio_de_Tota.jpg", city:"Aquitania",       deptId:7  },
  { id:26, name:"Nevado del Cocuy",         image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Ritacuba_.jpg/270px-Ritacuba_.jpg",                                                              city:"El Cocuy",           deptId:7  },
  { id:28, name:"Nevado del Ruiz",          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Nevado_del_Ruiz_nos_saludo_4.jpg/800px-Nevado_del_Ruiz_nos_saludo_4.jpg",                       city:"Manizales",          deptId:8  },
  { id:41, name:"Parque Puracé",            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Volcán_Puracé.jpg/800px-Volcán_Puracé.jpg",                                                     city:"Popayán",            deptId:11 },
  { id:40, name:"Centro Histórico Popayán", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Popayan_iglesia.jpg/800px-Popayan_iglesia.jpg",                                                  city:"Popayán",            deptId:11 },
  { id:3,  name:"Villa de Leyva",           image:"https://travelgrafia.co/wp-content/uploads/2020/02/Turismo-en-Villa-de-Leyva.jpg",                                                                        city:"Ricaurte",           deptId:15 },
  { id:2,  name:"Laguna de Guatavita",      image:"https://upload.wikimedia.org/wikipedia/commons/6/64/LagunaDeGuatavita.jpg",                                                                                city:"Sesquilé",           deptId:15 },
  { id:38, name:"Parque Jaime Duque",       image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Edificio_el_C%C3%B3ndor.jpg/220px-Edificio_el_C%C3%B3ndor.jpg",                                 city:"Tocancipá",          deptId:15 },
  { id:15, name:"Catedral de Sal",          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Catedral_de_Sal_de_Zipaquira.jpg/250px-Catedral_de_Sal_de_Zipaquira.jpg",                       city:"Zipaquirá",          deptId:15 },
  { id:6,  name:"Cerro Azul",               image:"https://www.colombia.co/wp-content/uploads/2017/09/15pinturascerroazul.jpg",                                                                               city:"San José del Guaviare",deptId:17},
  { id:12, name:"Desierto de la Tatacoa",   image:"https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2018/03/05120711/28435484_453545111727809_1993115415210885120_n-1024x741.jpg",        city:"Neiva",              deptId:18 },
  { id:37, name:"San Agustín",              image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/San_Agust%C3%ADn_square_%28Plaza_de_San_Agust%C3%ADn%29_%284925133723%29.jpg/250px-San_Agust%C3%ADn_square_%28Plaza_de_San_Agust%C3%ADn%29_%284925133723%29.jpg", city:"San Agustín", deptId:18 },
  { id:8,  name:"Cabo de la Vela",          image:"https://cdn.colombia.com/images/v2/turismo/sitios-turisticos/la-guajira/cabo-de-la-vela-guajira-800.webp",                                                 city:"Uribia",             deptId:19 },
  { id:31, name:"Rodadero",                 image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Vista_general_de_la_playa_de_El_Rodadero.jpg/273px-Vista_general_de_la_playa_de_El_Rodadero.jpg", city:"Santa Marta",      deptId:20 },
  { id:14, name:"Ciudad Perdida",           image:"https://javitour.com/wp-content/uploads/2015/04/Sitios-turisticos-de-Santa-Marta-Ciudad-Perdida-1-700x466.jpg",                                            city:"Santa Marta",        deptId:20 },
  { id:9,  name:"Parque Tayrona",           image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cabo_San_Juan%2C_Colombia.jpg/800px-Cabo_San_Juan%2C_Colombia.jpg",                             city:"Santa Marta",        deptId:20 },
  { id:5,  name:"Caño Cristales",           image:"https://www.colombia.co/wp-content/uploads/2017/09/cano_cristales.png",                                                                                    city:"La Macarena",        deptId:21 },
  { id:13, name:"Santuario Las Lajas",      image:"https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2018/03/05123007/lajas-1024x713.jpg",                                                 city:"Ipiales",            deptId:22 },
  { id:22, name:"Volcán Azufral",           image:"https://www.travelombia.com/wp-content/uploads/2014/11/Volcan-Azufral-main-620x245.jpg",                                                                   city:"Túquerres",          deptId:22 },
  { id:25, name:"Parque Los Nevados",       image:"https://3.bp.blogspot.com/-cFroLh1p7_k/WFdKQUaJl6I/AAAAAAAAACQ/Io39IvVLmyogG8i_3ZMDzxPZsZOwUq6HgCLcB/s400/maxresdefault.jpg",                           city:"Armenia",            deptId:25 },
  { id:30, name:"Filandia",                 image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Filandia.jpg/250px-Filandia.jpg",                                                                city:"Filandia",           deptId:25 },
  { id:11, name:"Parque del Café",          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Parque_del_caf%C3%A9%2C_panor%C3%A1mica_parque_ecoturistico.jpg/800px-Parque_del_caf%C3%A9%2C_panor%C3%A1mica_parque_ecoturistico.jpg", city:"Montenegro", deptId:25 },
  { id:27, name:"Valle del Cocora",         image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Cocora_valley.JPG/800px-Cocora_valley.JPG",                                                      city:"Salento",            deptId:25 },
  { id:24, name:"Salento",                  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Callerealsalento.JPG/800px-Callerealsalento.JPG",                                                city:"Salento",            deptId:25 },
  { id:16, name:"San Andrés",               image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Panor%C3%A1mica_de_San_Andres.JPG/265px-Panor%C3%A1mica_de_San_Andres.JPG",                    city:"San Andrés",         deptId:27 },
  { id:23, name:"Parque Chicamocha",        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Parque_Nacional_Chicamocha.jpg/800px-Parque_Nacional_Chicamocha.jpg",                            city:"Aratoca",            deptId:28 },
  { id:21, name:"Barichara",                image:"https://blog.redbus.co/wp-content/uploads/2019/05/dscn0664ed-768x576.jpg",                                                                                 city:"Barichara",          deptId:28 },
  { id:35, name:"Buga",                     image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Buga_desde_el_faro.JPG/800px-Buga_desde_el_faro.JPG",                                           city:"Bugalagrande",       deptId:31 },
  { id:33, name:"Cristo Rey",               image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Estatua_de_Cristo_Rey_-_Cali%2C_Colombia.jpg/800px-Estatua_de_Cristo_Rey_-_Cali%2C_Colombia.jpg", city:"Cali",             deptId:31 }
];

// Departamentos con foto representativa
const DPTOS = {
  2:  { name:"Antioquia",       photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/MetrocableArv%C3%AD1.JPG/270px-MetrocableArv%C3%AD1.JPG" },
  4:  { name:"Atlántico",       photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ventanalmundo.jpg/320px-Ventanalmundo.jpg" },
  5:  { name:"Cundinamarca",    photo:"https://www.colombia.co/wp-content/uploads/2018/04/shutterstock_645025201-1024x683.jpg" },
  6:  { name:"Bolívar",         photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/71_-_Carthag%C3%A8ne_-_D%C3%A9cembre_2008.jpg/1024px-71_-_Carthag%C3%A8ne_-_D%C3%A9cembre_2008.jpg" },
  7:  { name:"Boyacá",          photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Lago_de_Tota%2C_sector_municipio_de_Tota.jpg/1280px-Lago_de_Tota%2C_sector_municipio_de_Tota.jpg" },
  8:  { name:"Caldas",          photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Nevado_del_Ruiz_nos_saludo_4.jpg/800px-Nevado_del_Ruiz_nos_saludo_4.jpg" },
  11: { name:"Cauca",           photo:"https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2018/03/05123007/lajas-1024x713.jpg" },
  15: { name:"Cundinamarca",    photo:"https://travelgrafia.co/wp-content/uploads/2020/02/Turismo-en-Villa-de-Leyva.jpg" },
  17: { name:"Guaviare",        photo:"https://www.colombia.co/wp-content/uploads/2017/09/15pinturascerroazul.jpg" },
  18: { name:"Huila",           photo:"https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2018/03/05120711/28435484_453545111727809_1993115415210885120_n-1024x741.jpg" },
  19: { name:"La Guajira",      photo:"https://cdn.colombia.com/images/v2/turismo/sitios-turisticos/la-guajira/cabo-de-la-vela-guajira-800.webp" },
  20: { name:"Magdalena",       photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Cabo_San_Juan%2C_Colombia.jpg/800px-Cabo_San_Juan%2C_Colombia.jpg" },
  21: { name:"Meta",            photo:"https://www.colombia.co/wp-content/uploads/2017/09/cano_cristales.png" },
  22: { name:"Nariño",          photo:"https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2018/03/05123007/lajas-1024x713.jpg" },
  25: { name:"Quindío",         photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Cocora_valley.JPG/800px-Cocora_valley.JPG" },
  27: { name:"San Andrés",      photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Panor%C3%A1mica_de_San_Andres.JPG/265px-Panor%C3%A1mica_de_San_Andres.JPG" },
  28: { name:"Santander",       photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Parque_Nacional_Chicamocha.jpg/800px-Parque_Nacional_Chicamocha.jpg" },
  31: { name:"Valle del Cauca", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Estatua_de_Cristo_Rey_-_Cali%2C_Colombia.jpg/800px-Estatua_de_Cristo_Rey_-_Cali%2C_Colombia.jpg" }
};

// ── Agrupar por departamento ──────────────────────────────────────────────────
const byDept = {};
apiData.forEach(d => {
  if (!byDept[d.deptId]) byDept[d.deptId] = [];
  byDept[d.deptId].push(d);
});

const deptIds   = Object.keys(byDept).map(Number).sort((a,b) => byDept[b].length - byDept[a].length);
const deptNames = deptIds.map(id => DPTOS[id]?.name || `Dpto ${id}`);
const deptCounts= deptIds.map(id => byDept[id].length);
const topDept   = deptIds[0];
const topName   = deptNames[0];
const topCount  = deptCounts[0];

// ── Stats Hero pills ──────────────────────────────────────────────────────────
document.getElementById("hero-pills").innerHTML = [
  { num: apiData.length,   lbl: "Atractivos registrados" },
  { num: deptIds.length,   lbl: "Departamentos" },
  { num: [...new Set(apiData.map(d=>d.city))].length, lbl: "Ciudades" },
].map(p => `<div class="hero-pill"><span class="num">${p.num}</span><span class="lbl">${p.lbl}</span></div>`).join("");

// ── Gráfica principal: barras por departamento ────────────────────────────────
const COLORS = deptIds.map((_,i) =>
  i === 0 ? "#b8860b" : `rgba(22,18,14,${0.65 - i*0.04 < 0.15 ? 0.15 : 0.65 - i*0.04})`
);

const trace = {
  type: "bar",
  x: deptNames,
  y: deptCounts,
  marker: {
    color: COLORS,
    line: { color: "rgba(22,18,14,0.08)", width: 1 }
  },
  text: deptCounts.map(String),
  textposition: "outside",
  hovertemplate: "<b>%{x}</b><br>%{y} atractivos<extra></extra>"
};

Plotly.newPlot("chartDpto", [trace], {
  paper_bgcolor: "rgba(0,0,0,0)",
  plot_bgcolor:  "rgba(0,0,0,0)",
  font: { family: "DM Sans, sans-serif", size: 12, color: "#16120e" },
  margin: { t: 20, r: 20, b: 80, l: 40 },
  yaxis: {
    title: { text: "Atractivos" },
    gridcolor: "rgba(22,18,14,0.07)",
    zeroline: false
  },
  xaxis: { tickangle: -30 }
}, { responsive: true, displayModeBar: false });

// ── Insight box ───────────────────────────────────────────────────────────────
document.getElementById("insight").innerHTML = [
  { val: topCount,                     lbl: `atractivos en ${topName} (líder)` },
  { val: deptIds.length,               lbl: "departamentos representados" },
  { val: Math.round(apiData.length / deptIds.length * 10)/10, lbl: "promedio por departamento" },
  { val: deptCounts[deptCounts.length-1], lbl: `mínimo (${deptNames[deptNames.length-1]})` },
].map(i => `<div class="insight-item"><div class="ins-val">${i.val}</div><div class="ins-lbl">${i.lbl}</div></div>`).join("");

// ── Cards de departamentos ────────────────────────────────────────────────────
const grid = document.getElementById("dpto-grid");
deptIds.forEach(id => {
  const info   = DPTOS[id] || { name: `Dpto ${id}`, photo: "" };
  const items  = byDept[id];
  const count  = items.length;
  const names  = items.slice(0, 4).map(d => d.name);

  const card = document.createElement("div");
  card.className = "dpto-card";
  card.innerHTML = `
    <div class="dpto-img-wrap">
      <img src="${info.photo}" alt="${info.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x180/e8e2d8/6b5f52?text=${info.name}'">
      <div class="dpto-img-overlay"></div>
      <div class="dpto-img-name">${info.name}</div>
      <div class="dpto-badge">${count} ${count === 1 ? "atractivo" : "atractivos"}</div>
    </div>
    <div class="dpto-body">
      <div class="dpto-count">${count === 1 ? "1 sitio turístico" : `${count} sitios turísticos`}</div>
      <div class="dpto-attractions">
        ${names.map(n => `<div class="dpto-attr">${n}</div>`).join("")}
        ${count > 4 ? `<div class="dpto-attr" style="color:#b8860b">+${count-4} más...</div>` : ""}
      </div>
    </div>
  `;
  grid.appendChild(card);
});
