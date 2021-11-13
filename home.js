var data = [
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13205278-1974885475502363.jpg",
        type: "Olaplex Healthy Hair Essentials Kit - $84.00 Value",
        MRP:60.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13230258-6024900048950270.jpg",
        type: "Dr Demis Gross ped Love Joy Set- $51.00 Value",
        MRP:34.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13277591-1814898492833701.jpg",
        type: "Vinoperfect Dark Spot Brightenning Set $117.00 Value",
        MRP:79.00,

    },
    {
        image_url:
        "	https://static.thcdn.com/images/small/webp//productimg/original/12692885-9294871307990462.jpg",
        type: "Sunday Rile Wake Up With Me: Complete Morning Skincare Routine 6 piece- $158 Value",
        MRP: 95.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/12918957-1774871297058075.jpg",
        type: "Dr Dennis Gross Skincare Dermstore Exclusive AtHome Facial Kit 3 piece- $235 Value",
      MRP: 279.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13220026-3054897151143179.jpg",
        type: "FOREO UFO 2 Skincare Secrets Gits Set- $378.95 Value",
        MRP: 279.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13097177-1964898531576103.png",
        type: "slip Holiday Bauble 2021 Night Life 1 x White Rose Gold Star 4piece",
        MRP: 30.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13176041-1904885993627893.jpg",
        type: "111SKIN The jetsetter Set(Worth $43.00)",
        MRP: 30.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/12692885-9294871307990462.jpg",
        type: "Sunday Riley Wake Up With Me: Complete Morning Skincare Routine 6 pices-$158 Value",
        MRP:199.00,

    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13280761-1824907531367318.jpg",
        type: "Sunday Riley The Big Glow Deluxe Good Genes Kit- $309 Value",
        MRP:199.00,
    },
    {
        image_url:
        "https://static.thcdn.com/images/small/webp//productimg/original/13305212-2494907534493936.jpg",
        type: "ILIA The small Wor",
        MRP:29.00,
    },
    
  ];
  var block2 = document.getElementById("block2");
  var block21 = document.createElement("div");
  block21.setAttribute("id", "block21");
  block2.append(block21);
  showProducts();

  function showProducts() {
    data.map(function (item) {
      var imageDiv = document.createElement("div");
      imageDiv.setAttribute("id", "block22")
      var img = document.createElement("img");
      img.style.width="100%"
      img.setAttribute("src", item.image_url);
      var p = document.createElement("p");
      p.textContent = item.type;

      var p2 = document.createElement("h3");
      p2.innerHTML = `$ ${item.MRP}`;

      var btn = document.createElement("button");
      btn.textContent = "QUICKBUY";
      imageDiv.append(img, p, p2, btn);

      block21.append(imageDiv);
    });
  }


  
 