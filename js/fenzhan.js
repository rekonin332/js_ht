function GenerateStation(pData) {
  dataModel = new ht.DataModel();
  graphView = new ht.graph.GraphView(dataModel);
  graphView.enableToolTip(); //启用ToolTip
  view = graphView.getView();
  view.className = 'main';
  document.body.appendChild(view);
  window.addEventListener(
    'resize',
    function (e) {
      graphView.invalidate();
    },
    false
  );

  //图元事件
  //停止默认行为
  /*    graphView.setInteractors(null);*/
  graphView.setInteractors(
    new ht.List([
      new ht.graph.ScrollBarInteractor(graphView),
      new ht.graph.SelectInteractor(graphView),
      new ht.graph.MoveInteractor(graphView),
      new ht.graph.DefaultInteractor(graphView),
      new ht.graph.TouchInteractor(graphView),
    ])
  );

  var eventType = ht.Default.isTouchable ? 'touchend' : 'mouseup';

  view.addEventListener(eventType, function (e) {
    var data = graphView.getDataAt(e);
    if (!data instanceof ht.Node) {
      console.log(data instanceof ht.Node);
      return;
    }

    if (data && ht.Default.isDoubleClick(e)) {
      // console.log(
      //   data.getToolTip && data.getToolTip() ? data.getToolTip() : '11'
      // );
      console.log(data.getPosition().x, data.getPosition().y);
      if (!!data.getToolTip() && data.getToolTip().indexOf('|') > -1)
        //window.external.JSPointEdit(data.getToolTip());
        console.log(data.getPosition().x, data.getPosition().y);
    }
  });
  //Opearatins
  createNode(100, 100, 'aa', 'ss', station_bg_img, 138, 42);
}

function createNode(x, y, name, toolTip, icon, xs, ys) {
  var node = new ht.Node();

  // coordinateLst.push(x + '.' + y);
  node.setPosition(x, y);
  if (!!icon) {
    node.setImage(icon);
    node.setSize(xs | 40, ys | 40);
  }
  if (!!xs && !!ys) {
    node.setSize(xs, ys);
  }
  // name = name == '00.00.00.00.00.00' ? '+' : name;
  // name = name.endsWith('+') ? '+' : name;

  node.setName(name);
  node.setToolTip(toolTip);

  dataModel.add(node);
  return node;
}
