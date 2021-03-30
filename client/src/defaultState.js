const defaultState = {
  // eslint-disable-next-line no-undef
  product_id: window.location.pathname,
  onDisplayIndexes: [0, 1, 2, 3],
  product_data: [
    [
      {
        product_id: 10,
        thumbnail:
          'https://images.unsplash.com/photo-1511512578047-dfb367046420?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxfHxnYW1lc3xlbnwwfDB8fHwxNjE3MTI3MzQ5&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 14,
        thumbnail:
          'https://images.unsplash.com/photo-1542751371-adc38448a05e?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyfHxnYW1lc3xlbnwwfDB8fHwxNjE3MTI3MzQ5&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 21,
        thumbnail:
          'https://images.unsplash.com/photo-1577741314755-048d8525d31e?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwzfHxnYW1lc3xlbnwwfDB8fHwxNjE3MTI3MzQ5&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 56,
        thumbnail:
          'https://images.unsplash.com/photo-1606167668584-78701c57f13d?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw0fHxnYW1lc3xlbnwwfDB8fHwxNjE3MTI3MzQ5&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 78,
        thumbnail:
          'https://images.unsplash.com/photo-1555680202-c86f0e12f086?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw1fHxnYW1lc3xlbnwwfDB8fHwxNjE3MTI3MzQ5&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 79,
        thumbnail:
          'https://images.unsplash.com/photo-1500995617113-cf789362a3e1?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw2fHxnYW1lc3xlbnwwfDB8fHwxNjE3MTI3MzQ5&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 83,
        thumbnail:
          'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw3fHxnYW1lc3xlbnwwfDB8fHwxNjE3MTI3MzQ5&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 94,
        thumbnail:
          'https://images.unsplash.com/photo-1562503007-73443f9dc9e2?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw4fHxnYW1lc3xlbnwwfDB8fHwxNjE3MTI3MzQ5&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      'responsive'
    ],
    [
      {
        product_id: 21,
        thumbnail:
          'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw5fHxnYW1lc3xlbnwwfDB8fHwxNjE3MTI3MzQ5&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 22,
        thumbnail:
          'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxMHx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 28,
        thumbnail:
          'https://images.unsplash.com/photo-1531594896955-305cf81269f1?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxMXx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 38,
        thumbnail:
          'https://images.unsplash.com/photo-1601162937667-08f083516d57?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxMnx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 50,
        thumbnail:
          'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxM3x8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 67,
        thumbnail:
          'https://images.unsplash.com/photo-1556537570-231ead2a4009?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxNHx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 77,
        thumbnail:
          'https://images.unsplash.com/photo-1610262159384-0018d2277acd?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxNXx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 100,
        thumbnail:
          'https://images.unsplash.com/photo-1593277992013-05e17a5f417d?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxNnx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      'radical'
    ],
    [
      {
        product_id: 8,
        thumbnail:
          'https://images.unsplash.com/photo-1531812494838-636e337af5a6?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxN3x8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 21,
        thumbnail:
          'https://images.unsplash.com/photo-1552843687-17a70acb30c4?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxOHx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 29,
        thumbnail:
          'https://images.unsplash.com/photo-1578762560042-46ad127c95ea?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxOXx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 49,
        thumbnail:
          'https://images.unsplash.com/photo-1498736297812-3a08021f206f?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyMHx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 86,
        thumbnail:
          'https://images.unsplash.com/photo-1614680376739-414d95ff43df?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyMXx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 94,
        thumbnail:
          'https://images.unsplash.com/photo-1532219600601-8494408a4a2c?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyMnx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      'client-driven'
    ],
    [
      {
        product_id: 21,
        thumbnail:
          'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyM3x8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 35,
        thumbnail:
          'https://images.unsplash.com/photo-1604586384428-c1299f5cad01?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyNHx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 45,
        thumbnail:
          'https://images.unsplash.com/photo-1566576912317-9f38f640f471?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyNXx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 77,
        thumbnail:
          'https://images.unsplash.com/photo-1566755310213-78d8db337ad2?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyNnx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      'fault-tolerant'
    ],
    [
      {
        product_id: 21,
        thumbnail:
          'https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyN3x8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 34,
        thumbnail:
          'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyOHx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 37,
        thumbnail:
          'https://images.unsplash.com/photo-1546512636-028082dff74d?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyOXx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 59,
        thumbnail:
          'https://images.unsplash.com/photo-1525540810550-5032f5d191b1?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwzMHx8Z2FtZXN8ZW58MHwwfHx8MTYxNzEyNzM0OQ&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 63,
        thumbnail:
          'https://images.unsplash.com/photo-1576079289400-c64c9c07b1f0?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwxfHxncmFwaGljc3xlbnwwfDB8fHwxNjE3MTMyMTU2&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 72,
        thumbnail:
          'https://images.unsplash.com/photo-1559149251-e9a1dc89981d?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwyfHxncmFwaGljc3xlbnwwfDB8fHwxNjE3MTMyMTU2&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 97,
        thumbnail:
          'https://images.unsplash.com/photo-1554188248-986adbb73be4?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHwzfHxncmFwaGljc3xlbnwwfDB8fHwxNjE3MTMyMTU2&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      'methodical'
    ],
    [
      {
        product_id: 2,
        thumbnail:
          'https://images.unsplash.com/photo-1600004853937-857d1070d505?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw0fHxncmFwaGljc3xlbnwwfDB8fHwxNjE3MTMyMTU2&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 5,
        thumbnail:
          'https://images.unsplash.com/photo-1542491873-564432bfb050?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw1fHxncmFwaGljc3xlbnwwfDB8fHwxNjE3MTMyMTU2&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 18,
        thumbnail:
          'https://images.unsplash.com/photo-1580566176138-daa588058b59?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw2fHxncmFwaGljc3xlbnwwfDB8fHwxNjE3MTMyMTU2&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 21,
        thumbnail:
          'https://images.unsplash.com/photo-1614518918123-55d5bea67b11?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw3fHxncmFwaGljc3xlbnwwfDB8fHwxNjE3MTMyMTU2&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 22,
        thumbnail:
          'https://images.unsplash.com/photo-1576502200272-341a4b8d5ebb?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw4fHxncmFwaGljc3xlbnwwfDB8fHwxNjE3MTMyMTU2&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      {
        product_id: 100,
        thumbnail:
          'https://images.unsplash.com/photo-1585937039451-671ecee0e605?fm=jpg&ixid=MnwyMTkxNzZ8MHwxfHNlYXJjaHw5fHxncmFwaGljc3xlbnwwfDB8fHwxNjE3MTMyMTU2&ixlib=rb-1.2.1&fit=crop&w=135&h=84'
      },
      'attitude-oriented'
    ]
  ]
};

export default defaultState;
