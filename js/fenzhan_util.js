var palette = new ht.widget.Palette(),
  dataModel = new ht.DataModel(),
  selectionModel = dataModel.getSelectionModel(),
  graphView = new ht.graph.GraphView(dataModel),
  panel = new ht.widget.Panel(),
  dataModelDM = new ht.DataModel(),
  graphViewDM = new ht.graph.GraphView(dataModelDM),
  mainView = new ht.widget.SplitView(graphView, graphViewDM, 'v', 1),
  view = mainView.getView(),
  style = view.style;
function createEdge(source, target) {
  //直线函数
  var edge = new ht.Edge(source, target);
  edge.s({
    'edge.type': 'ortho',
    'edge.ortho': 0.5,
    'edge.corner.radius': 0.5,
    'edge.center': true,
    '2d.selectable': false,
  });
  edge.setLayer(0);
  graphView.dm().add(edge);
}
function createEdge2(source, target) {
  //直线函数
  var edge = new ht.Edge(source, target);
  edge.s({
    'edge.type': 'h.v',

    'edge.corner.radius': 0.5,
    'edge.center': true,
    '2d.selectable': false,
  });
  edge.setLayer(0);
  graphView.dm().add(edge);
}
//智能通道
function createGrid2(name) {
  var grid = new ht.Grid();
  grid.s({
    label: name,
    'label.font': '16px arial, sans-serif',
    'label.offset.y': -46,
    'grid.row.count': 1,
    'grid.column.count': 1,
    'grid.border': 0,
    'grid.background': 'rgb(204,204,204)',
    'grid.cell.depth': 0,
    'grid.cell.border.color': 'rgb(0,0,0)',
    'grid.gap': 0,
    'grid.depth': 0,
    '2d.movable': false,
    '2d.editable': false,
    '2d.selectable': true,
    'select.color': 'rgb(135,206,250)',
    'select.width': '3',
    'select.padding': '2',
    'select.type': 'rect',
  });
  grid.setName(name);
  grid.setTag(name);
  grid.a('编号', name);
  grid.a('位置', '');
  grid.a('类型', '');
  grid.setSize(73, 73);
  grid.setLayer(0);
  return grid;
}
//通道
function createGrid(name) {
  var grid = new ht.Grid();
  grid.s({
    label: name,
    'label.font': '16px arial, sans-serif',
    'label.offset.y': -27,
    'label.offset.x': 0,
    'grid.row.count': 1,
    'grid.column.count': 1,
    'grid.border': 0,
    'grid.background': 'rgb(204,204,204)',
    'grid.cell.depth': 0,
    'grid.cell.border.color': 'rgb(0,0,0)',
    'grid.gap': 0,
    'grid.depth': 0,
    '2d.movable': false,
    '2d.editable': false,
    '2d.selectable': true,
    'select.color': 'rgb(199,215,249)',
    'select.width': '3',
    'select.padding': '2',
    'select.type': 'rect',
  });
  grid.setName(name);
  grid.setTag(name);
  grid.a('编号', name);
  grid.a('位置', '');
  grid.a('类型', '');
  grid.setSize(150, 29);
  grid.setLayer(0);
  return grid;
}
function createGrid3(name) {
  var grid = new ht.Grid();
  grid.s({
    label: name,
    'label.font': '16px arial, sans-serif',
    'label.offset.y': -22,
    'label.offset.x': 0,
    'grid.row.count': 1,
    'grid.column.count': 1,
    'grid.border': 0,
    'grid.background': 'rgb(204,204,204)',
    'grid.cell.depth': 0,
    'grid.cell.border.color': 'rgb(0,0,0)',
    'grid.gap': 0,
    'grid.depth': 0,
    '2d.movable': false,
    '2d.editable': false,
    '2d.selectable': true,
    'select.color': 'rgb(199,215,249)',
    'select.width': '3',
    'select.padding': '2',
    'select.type': 'rect',
  });
  grid.setName(name);
  grid.setTag(name);
  grid.a('编号', name);
  grid.a('位置', '');
  grid.a('类型', '');
  grid.setSize(150, 19);
  grid.setLayer(0);
  return grid;
}

//挂接
function createGrid4(name) {
  var grid = new ht.Grid();
  grid.s({
    label: name,
    'label.font': '16px arial, sans-serif',
    'label.offset.y': -27,
    'label.offset.x': 0,
    'grid.row.count': 1,
    'grid.column.count': 1,
    'grid.border': 0,
    'grid.background': 'rgb(222,170,9)',
    'grid.cell.depth': 0,
    'grid.cell.border.color': 'rgb(0,0,0)',
    'grid.gap': 0,
    'grid.depth': 0,
    '2d.movable': false,
    '2d.editable': false,
    '2d.selectable': true,
    'select.color': 'rgb(199,215,249)',
    'select.width': '3',
    'select.padding': '2',
    'select.type': 'rect',
  });
  grid.setName(name);
  grid.setTag(name);
  grid.a('编号', name);
  grid.a('位置', '');
  grid.a('类型', '');
  grid.setSize(100, 29);
  grid.setLayer(0);
  return grid;
}
function createGrid5(name) {
  var grid = new ht.Grid();
  grid.s({
    label: name,
    'label.font': '16px arial, sans-serif',
    'label.offset.y': -22,
    'label.offset.x': 0,
    'grid.row.count': 1,
    'grid.column.count': 1,
    'grid.border': 0,
    'grid.background': 'rgb(222,170,9)',
    'grid.cell.depth': 0,
    'grid.cell.border.color': 'rgb(0,0,0)',
    'grid.gap': 0,
    'grid.depth': 0,
    '2d.movable': false,
    '2d.editable': false,
    '2d.selectable': true,
    'select.color': 'rgb(199,215,249)',
    'select.width': '3',
    'select.padding': '2',
    'select.type': 'rect',
  });
  grid.setName(name);
  grid.setTag(name);
  grid.a('编号', name);
  grid.a('位置', '');
  grid.a('类型', '');
  grid.setSize(100, 19);
  grid.setLayer(0);
  return grid;
}
function createGridShape(name) {
  var node = new ht.Node();
  node.s({
    shape: 'circle',
    '2d.selectable': true,
  });
  return node;
}
function initbaseStation(baseStationType) {
  var node = new ht.Node();
  node.setPosition(680, 300);
  if (baseStationType == '1') {
    node.setImage(fenzhan_bg);
  } else {
    node.setImage(fenzhan_bg);
  }
  node.setSize(430, 502);
  node.setLayer(0);
  node.s({
    label: '',
    'label.position': 7,
    '2d.movable': false,
    '2d.editable': false,
    '2d.selectable': true,
  });
  graphView.dm().add(node);
}
function initSlogan(baseStationType) {
  var gridShape = {};
  grid = {};
  var s1 = 465;
  s2 = 895;
  s3 = 160;
  s4 = 444; //s1是左边两个点的X，s2是右边两个点的X,s3是上边两个点的Y，s4是下边两个点的Y。
  switch (baseStationType.fzlx) {
    case '0':
    case '1': //16个通道分站
      var s5 = 265;
      s6 = 55;
      s7 = 1095;
      var count = 17;
      var ss = s5;
      var sss = s6;
      for (var i = 1; i < count; i++) {
        if (i == 0 * parseInt(count / 4) + 1) {
          gridShape = createGridShape();
          gridShape.setPosition(s1, s3);
          graphView.dm().add(gridShape);
        }
        if (i == 1 * parseInt(count / 4) + 1) {
          gridShape = createGridShape();
          gridShape.setPosition(s1, s4);
          graphView.dm().add(gridShape);
        }
        if (i == 2 * parseInt(count / 4) + 1) {
          gridShape = createGridShape();
          gridShape.setPosition(s2, s3);
          graphView.dm().add(gridShape);
        }
        if (i == 3 * parseInt(count / 4) + 1) {
          gridShape = createGridShape();
          gridShape.setPosition(s2, s4);
          graphView.dm().add(gridShape);
        }
        if (i == parseInt(count / 2) + 1) {
          ss = s7;
          sss = s6;
        }
        grid = createGrid('传感器-' + i);
        grid.setPosition(ss, sss);
        grid.setLayer(0);
        dataModel.add(grid);
        createEdge(gridShape, grid);
        sss += 70;
      }
      gridShape = createGridShape();
      gridShape.setPosition(600, 600);
      graphView.dm().add(gridShape);
      var gridShape2 = createGridShape();
      gridShape2.setPosition(600, 550);
      graphView.dm().add(gridShape2);
      createEdge2(gridShape, gridShape2);

      gridShape = createGridShape();
      gridShape.setPosition(760, 600);
      graphView.dm().add(gridShape);
      var gridShape3 = createGridShape();
      gridShape3.setPosition(760, 550);
      graphView.dm().add(gridShape3);
      createEdge2(gridShape, gridShape3);

      var kzkcount = 5; //控制口数量加了1
      var znlcount = 9; //智能量加了1
      var kzks1 = 165;
      kzks2 = 665;
      for (var ii = 1; ii < kzkcount; ii++) {
        grid = createGrid2('控制器-' + ii);
        grid.setPosition(kzks1, kzks2);
        grid.setLayer(0);
        dataModel.add(grid);
        createEdge2(gridShape, grid);
        kzks1 += 94;
      }
      for (var iii = 1; iii < znlcount; iii++) {
        grid = createGrid2('智能量-' + iii);
        grid.setPosition(kzks1, kzks2);
        grid.setLayer(0);
        dataModel.add(grid);
        createEdge2(gridShape, grid);
        kzks1 += 94;
      }

      break;
    case '2': //32个通道分站
      var s5 = 265;
      s6 = 35;
      s7 = 1095;
      var count = 33;
      var ss = s5;
      var sss = s6;
      for (var i = 1; i < count; i++) {
        if (i == 0 * parseInt(count / 4) + 1) {
          gridShape = createGridShape();
          gridShape.setPosition(s1, s3);
          graphView.dm().add(gridShape);
        }
        if (i == 1 * parseInt(count / 4) + 1) {
          gridShape = createGridShape();
          gridShape.setPosition(s1, s4);
          graphView.dm().add(gridShape);
        }
        if (i == 2 * parseInt(count / 4) + 1) {
          gridShape = createGridShape();
          gridShape.setPosition(s2, s3);
          graphView.dm().add(gridShape);
        }
        if (i == 3 * parseInt(count / 4) + 1) {
          gridShape = createGridShape();
          gridShape.setPosition(s2, s4);
          graphView.dm().add(gridShape);
        }
        if (i == parseInt(count / 2) + 1) {
          ss = s7;
          sss = s6;
        }
        grid = createGrid3('传感器-' + i);
        grid.setPosition(ss, sss);
        grid.setLayer(0);
        dataModel.add(grid);
        createEdge(gridShape, grid);
        sss += 35;
      }
      gridShape = createGridShape();
      gridShape.setPosition(600, 600);
      graphView.dm().add(gridShape);
      var gridShape2 = createGridShape();
      gridShape2.setPosition(600, 550);
      graphView.dm().add(gridShape2);
      createEdge2(gridShape, gridShape2);

      gridShape = createGridShape();
      gridShape.setPosition(760, 600);
      graphView.dm().add(gridShape);
      var gridShape3 = createGridShape();
      gridShape3.setPosition(760, 550);
      graphView.dm().add(gridShape3);
      createEdge2(gridShape, gridShape3);

      var kzkcount = 5; //控制口数量加了1
      var znlcount = 9; //智能量加了1
      var kzks1 = 165;
      kzks2 = 665;
      for (var ii = 1; ii < kzkcount; ii++) {
        grid = createGrid2('控制器-' + ii);
        grid.setPosition(kzks1, kzks2);
        grid.setLayer(0);
        dataModel.add(grid);
        createEdge2(gridShape, grid);
        kzks1 += 94;
      }
      for (var iii = 1; iii < znlcount; iii++) {
        grid = createGrid2('智能量-' + iii);
        grid.setPosition(kzks1, kzks2);
        grid.setLayer(0);
        dataModel.add(grid);
        createEdge2(gridShape, grid);
        kzks1 += 94;
      }

      break;
  }
}

//释放子窗口弹出控制
function disposeCallBack() {}
function disposeCallBackLose() {
  var postdata = {
    fzlx: '2',
    PointList: [
      { point: '006A050', zl: '甲烷', xh: '5' },
      { point: '006A060', zl: '甲烷', xh: '6' },
    ],
    AutoPointList: [
      { point: '006A070', zl: '甲烷', xh: '7' },
      { point: '006A220', zl: '甲烷', xh: '22' },
    ],
  };
  init(postdata);
}
function disposeCallBack2e(jsonstr) {
  alert(jsonstr);
  var cs = JSON.parse(jsonstr);
  alert(cs.fzlx);
  init(cs);
}
function getTextWidth(str) {
  return str.replace(/[\u0391-\uFFE5]/g, 'aa').length;
}
function layoutHove2(node, pos, type, name, site, types, state) {
  //types = "挂号费挂号费挂号费挂号费挂号费";
  //state = "21.KGJ28A/GJC4/(A)低浓甲烷&甲烷";
  var winame = getTextWidth(name) * 8;
  var witypes = getTextWidth(types) * 8;
  var wistate = getTextWidth(state) * 8;
  var bi = winame > witypes ? winame : witypes;
  var wi = bi > wistate ? bi : wistate;
  node.s('2d.visible', true);
  node.s('2d.movable', false);
  node.s('2d.editable', false);
  node.setLayer(2);
  node.s('select.width', 0); //ht.Default.setImage('location', 'images/location.png');

  ht.Default.setImage('cloud-rect', {
    width: wi + 110,
    height: 170,
    fitSize: true,
    scrollable: true,
    interactive: true,
    pixelPerfect: false,
    clip: true,
    comps: [
      {
        type: 'shape',
        background: 'rgb(255,255,255)',
        borderWidth: 1,
        borderColor: 'rgb(0,0,0)',
        editable: false,
        anchorX: 0,
        anchorY: 1,
        points: [
          10,
          115,
          30.05542,
          110,
          30.05542,
          80,
          wi + 100,
          80,
          wi + 100,
          150,
          30.05542,
          150,
          30.05542,
          120,
          10,
          115,
        ],
      },
      {
        type: 'text',
        text: '编号：' + name,
        rect: [33, 0, wi + 100, 180],
        color: '#000000',
        font: '16px arial, sans-serif',
        align: 'left',
      },
      {
        type: 'text',
        text: '位置：' + types,
        rect: [33, 0, wi + 100, 228],
        color: '#000000',
        font: '16px arial, sans-serif',
        align: 'left',
      },
      {
        type: 'text',
        text: '类型：' + state,
        rect: [33, 0, wi + 100, 276],
        color: '#000000',
        font: '16px arial, sans-serif',
        align: 'left',
      },
    ],
  });

  ht.Default.setImage('cloud-rectleft', {
    width: wi + 110,
    height: 170,
    fitSize: true,
    scrollable: true,
    interactive: true,
    pixelPerfect: false,
    clip: true,
    comps: [
      {
        type: 'shape',
        background: 'rgb(255,255,255)',
        borderWidth: 1,
        borderColor: 'rgb(0,0,0)',
        editable: false,
        anchorX: 0,
        anchorY: 1,
        points: [
          10,
          115,
          -30.05542,
          110,
          -30.05542,
          80,
          wi - 500,
          80,
          wi - 500,
          150,
          -30.05542,
          150,
          -30.05542,
          120,
          10,
          115,
        ],
      },
      {
        type: 'text',
        text: '编号：' + name,
        rect: [33, 0, wi + 100, 180],
        color: '#000000',
        font: '16px arial, sans-serif',
        align: 'left',
      },
      {
        type: 'text',
        text: '位置：' + types,
        rect: [33, 0, wi + 100, 228],
        color: '#000000',
        font: '16px arial, sans-serif',
        align: 'left',
      },
      {
        type: 'text',
        text: '类型：' + state,
        rect: [33, 0, wi + 100, 276],
        color: '#000000',
        font: '16px arial, sans-serif',
        align: 'left',
      },
    ],
  });

  node.setImage('cloud-rect'); //node.setStyle('note', '我的名字叫' + name)
  //alert(node.getWidth() / 2);
  node.setPosition(
    pos.x + node.getWidth() / 2 + 10,
    pos.y - node.getHeight() / 6
  );
  //node.setPosition(pos.x + 150, pos.y - 50);
}

function initdata(jsonstr) {
  if (jsonstr == '') {
    return;
  }
  var pointlist = jsonstr.PointList;
  if (pointlist != null && pointlist.length > 0) {
    for (var i = 0; i < pointlist.length; i++) {
      var tag = '传感器-' + pointlist[i].xh;
      var ss = dataModel.getDataByTag(tag);
      var ponname = '';
      if (ss != undefined) {
        ponname = pointlist[i].point + '  ' + pointlist[i].zl;
        ss.setStyle('label', ponname);
        ss.setStyle('grid.background', 'rgb(135 ,206 ,250)');
        ss.setName(ponname);
        ss.setTag(pointlist[i].point);
        ss.a('编号', pointlist[i].point);
        ss.a('位置', '');
        ss.a('类型', '');
      }
      //graphView.invalidateData(ss);
    }
  }
}

//初始化自动挂接数据
function initAutodata(jsonstr) {
  if (jsonstr == '') {
    return;
  }
  var fzlx = jsonstr.fzlx;
  var AutoPointList = jsonstr.AutoPointList;
  if (AutoPointList != null && AutoPointList.length > 0) {
    for (var i = 0; i < AutoPointList.length; i++) {
      var tag = '传感器-' + AutoPointList[i].xh;
      var ss = dataModel.getDataByTag(tag);
      var ponname = '';
      var grid = {};
      var xxx = '';
      var yyy = '';
      if (ss != undefined) {
        var pos = ss.getPosition();
        xxx = pos.x;
        yyy = pos.y;
        ponname = AutoPointList[i].point + '  ' + AutoPointList[i].zl;
        var xh = AutoPointList[i].xh;
        if (fzlx == '1') {
          //类型为1， 16个测点
          grid = createGrid4('自动挂接');
          xxx -= 138;
          if (parseInt(xh) > 8) {
            xxx += 276;
          }
        } else if (fzlx == '2') {
          //类型为2， 32个测点
          grid = createGrid5('自动挂接');
          xxx -= 136;
          if (parseInt(xh) > 16) {
            xxx += 276;
          }
        }
        grid.setPosition(xxx, yyy);
        grid.setLayer(0);
        dataModel.add(grid);
      }
      //graphView.invalidateData(ss);
    }
  }
}

function init(jsonstr) {
  dataModel.clear();
  mainView.setDraggable(false);
  mainView.setDividerBackground('rgb(197, 193, 189)');
  mainView.setDividerSize(30);
  style.position = 'absolute';
  style.top = '66px';
  style.right = '0';
  style.bottom = '0';
  style.left = '0';
  graphView.setLayers([0, 1, 2, 3, 4, 5, 6]);
  graphViewDM.setLayers([0, 1, 2, 3, 4, 5, 6]);
  graphView.setPannable(false); //设置节点可拖拽，场景不可拖拽
  graphView.handleScroll = function () {}; //关闭鼠标缩放
  graphView.setRectSelectable(false);
  graphView.fitContent(true);

  //加载基站面板
  initbaseStation(jsonstr.fzlx);

  //加载口号
  initSlogan(jsonstr);

  //加载定义数据
  initdata(jsonstr);

  //加载自动挂接数据
  initAutodata(jsonstr);

  var eventType = ht.Default.isTouchable ? 'touchend' : 'mouseup';
  graphView.getView().addEventListener(eventType, function (e) {
    var data = graphView.getDataAt(e);
    if (data && ht.Default.isDoubleClick(e)) {
      var hoverData = graphView.getDataAt(e);
      if (hoverData === undefined) {
        return false;
      }
      var name = hoverData.a('编号');
      var types = hoverData.a('位置');
      var state = hoverData.a('类型');
      var postdata = { ID: name, NAME: types, CREATETIME: state };
      var sfdgf = JSON.stringify(postdata);
      alert(name);
      window.external.createGraphics_Click(sfdgf);
    }
  });

  var node = new ht.Node();
  node.s('2d.visible', false); //node.setLayer('higher');

  dataModel.add(node); //				 //设置层级

  graphView.getView().addEventListener('mousemove', function (e) {
    //鼠标变成手势
    var data = graphView.getDataAt(e, function (d) {
      if (d instanceof ht.Node) {
        return true;
      }
      return false;
    });
    if (data) {
      graphView.getView().style.cursor = 'pointer';
    } else {
      graphView.getView().style.cursor = 'default';
    }

    node.s('2d.visible', false);
    var hoverData = graphView.getDataAt(e);
    if (hoverData === undefined) {
      return false;
    }

    pos = graphView.getLogicalPoint(e); //console.log(hoverData._name)
    if (
      hoverData._name != undefined &&
      Object.keys(hoverData._attrObject).length > 0
    ) {
      var name = hoverData.a('编号');
      var site = '';
      var types = hoverData.a('位置');
      var state = hoverData.a('类型');

      layoutHove2(node, pos, 'hove', name, site, types, state); //
    }
  });

  document.getElementById('main').appendChild(view);

  window.addEventListener('resize', function (e) {
    mainView.iv();
    graphView.fitContent(true);
    graphViewDM.fitContent(true);
  });
}
