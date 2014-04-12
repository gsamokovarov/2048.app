var gui = require ('nw.gui');

function Application(desktopWindow) {
  this.desktopWindow = desktopWindow || gui.Window.get();
  this.gameManager   = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);

  this.initializeMenu();
}

Application.prototype.initializeMenu = function () {
  var menubar = new gui.Menu({ type: 'menubar' });

  // See https://github.com/rogerwang/node-webkit/issues/743 to get an idea of
  // of how to get the ordering right.
  this.desktopWindow.menu = menubar;

  var gameMenu = new gui.Menu;
  gameMenu.append(new gui.MenuItem({
    label: 'New Game',
    click: function() { this.gameManager.restart(); }.bind(this)
  }));

  gameMenu.append(new gui.MenuItem({ type: 'separator' }));

  gameMenu.append(new gui.MenuItem({
    label: 'Quit',
    click: function() { window.close(); }
  }));

  menubar.insert(new gui.MenuItem({
    label: 'Game',
    submenu: gameMenu
  }), 1);

  if (process.env.DEBUG) {
    var debugMenu = new gui.Menu;

    menubar.append(new gui.MenuItem({
      label: 'Debug',
      submenu: debugMenu
    }));

    debugMenu.append(new gui.MenuItem({
      label: 'Developer Tools',
      click: function() { gui.Window.get().showDevTools(); }
    }));
  }
};

Application.run = function (desktopWindow) {
  window.requestAnimationFrame(function () {
    new Application(desktopWindow);
  });
};

Application.run();
