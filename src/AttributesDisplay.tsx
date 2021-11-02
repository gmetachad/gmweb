import { useState } from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

const GmButton = styled.button`
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  user-select: none;
  border-radius: 10px;
  border: 1px solid white;
  line-height: 100%;
  vertical-align: center;
  font-weight: bold;
  justify-content: center;
`;

const ImageDisplay = (props: any) => {
  const [attributes, setAttributes] = useState([
    ["Clan", "Degen Gang"],
    ["Class", "Punk"],
    ["Companion", "Phoenix"],
    ["Item", "Atlas Star"],
    ["Weapon", "Wacky Bazooka"],
    ["Headwear", "Vizor"],
    ["Armor", "Golden Kimono"],
    ["Footwear", "Sandals"],
  ]);

  const clan = ["Degen Gang", "Meta Tribe", "Solar Dynasty", "Vortex Society"];
  const classs = [
    "Fren",
    "Punk",
    "Knight",
    "Humanoid",
    "Monster Hunter",
    "Phantom",
    "Shadowy Supercoder",
    "Samurai",
    "Droid",
    "Healer",
    "Warrior",
    "Assassin",
    "Whisperer",
    "Viking",
    "Ninja",
    "Zombie",
    "Wizard",
    "Mutant",
    "High Priest",
    "Alien",
    "Chad",
    "Deity",
    "Titan",
    "Tree",
  ];
  const companion = [
    "Drunk Doge",
    "Keynesian Kitty",
    "Glorious Goat",
    "Parrot Parrot",
    "Philosophical Phoenix",
    "Friendly Orca",
    "Bored Lion",
    "Derpy Koala",
    "Party Penguin",
    "Lazy Ape",
    "Anxious Alpaca",
    "Backup Bear",
    "Oddly Offensive Owl",
    "Really Big Pony",
    "Kooky Quokka",
    "Royal Dragon",
    "Fairly Fast Sloth",
    "Smol Shark",
    "Radioactive Raccoon",
    "Giga Whale",
    "Short Bull",
    "Gay Unicorn",
    "Horny Panda",
    "Majestic Monke",
    "Rock",
  ];
  const item = [
    "Potion",
    "Pi Pie",
    "Power-up",
    "Oxygen Mask",
    "Step Counter",
    "Private Key",
    "Moebius Strap",
    "Mango Juice",
    "Daonut",
    "Fractal Fire",
    "Wallet",
    "Serum",
    "Alamedic Anchor",
    "Finite Stone",
    "Atlas Star",
    "Helios Lamp",
    "Rug Pull Request",
    "Wormhole Generator",
    "Perpetual Pump",
    "Audio Recorder",
    "Spaceship",
    "Infinite Candy Machine",
    "Ferrante Bag",
    "Jordosz Joker",
    "+1 Life",
    "SBF 50",
    "Ring of Raj",
    "Toly Talisman",
  ];
  const weapon = [
    "Shield",
    "Knife",
    "Hammer",
    "Blade",
    "Sword",
    "Spear",
    "Scythe",
    "Boomerang",
    "Disc",
    "Gun",
    "Morning Star",
    "Whip",
    "Saber",
    "Bazooka",
    "Shuriken",
    "Wand",
    "Chainsaw",
    "Cannon",
    "Plunger",
    "Blaster",
    "Gauntlet",
    "Bomb",
    "Double Hoak Sword",
    "Screwdriver",
  ];
  const headwear = [
    "Bucket Hat",
    "Helmet",
    "Vizor",
    "Beanie",
    "Wig",
    "Hood",
    "Diadem",
    "Goggles",
    "Headband",
    "Fez",
    "Cowboy Hat",
    "Crown",
    "Dad Hat",
    "Bandana",
    "Thinking Cap",
    "Shades",
    "Earmuffs",
    "Sombrero",
    "Propeller Hat",
    "Eye Patch",
    "Austin Fedora Hat",
    "No Cap",
  ];
  const armor = [
    "Chestplate",
    "Ballistic Vest",
    "Houdini's Hoodie",
    "Wetsuit",
    "Cuirass",
    "Iron Suit",
    "Lederhosen",
    "Mechanical Wings",
    "Birthday Suit",
    "Onesie",
    "Parachute",
    "Lifejacket",
    "Golden Kimono",
    "Suspenders",
    "Bikini",
    "Mankini",
    "Limited Merch",
  ];
  const footwear = [
    "Sneakers",
    "Socks",
    "Rollerblades",
    "Sandals",
    "Boots",
    "Hoverboard",
    "Flying Carpet",
    "Clogs",
    "Flip Flops",
    "Skis",
    "Heels",
    "Stilts",
    "Neumann Shoes",
    "Bisocks",
  ];

  const getRandomInt = (arr: string[]) => {
    let n = arr.length;
    return Math.floor(Math.random() * n);
  };

  const updateAttributes = (idx: number, newAttr: string) => {
    let items = [...attributes];
    let item = { ...items[idx] };
    item[1] = newAttr;
    items[idx] = item;
    setAttributes(items);
  };

  const handleBadgeClick = (attr: string[], updateAll: boolean) => {
    switch (attr[0]) {
      case "Clan":
        let rand_int_clan = getRandomInt(clan);
        let done_clan = false;
        while (!done_clan) {
          if (attr[1] !== clan[rand_int_clan]) {
            if (updateAll) {
              return [0, clan[rand_int_clan]];
            } else {
              updateAttributes(0, clan[rand_int_clan]);
            }

            done_clan = true;
          }
          rand_int_clan = getRandomInt(clan);
        }
        break;

      case "Class":
        let rand_int_classs = getRandomInt(classs);
        let done_classs = false;
        while (!done_classs) {
          if (attr[1] !== classs[rand_int_classs]) {
            if (updateAll) {
              return [1, classs[rand_int_classs]];
            } else {
              updateAttributes(1, classs[rand_int_classs]);
            }
            done_classs = true;
          }
          rand_int_classs = getRandomInt(classs);
        }
        break;
      case "Companion":
        let rand_int_companion = getRandomInt(companion);
        let done_companion = false;
        while (!done_companion) {
          if (attr[1] !== companion[rand_int_companion]) {
            if (updateAll) {
              return [2, companion[rand_int_companion]];
            } else {
              updateAttributes(2, companion[rand_int_companion]);
            }
            done_companion = true;
          }
          rand_int_companion = getRandomInt(companion);
        }
        break;
      case "Item":
        let rand_int_item = getRandomInt(item);
        let done_item = false;
        while (!done_item) {
          if (attr[1] !== item[rand_int_item]) {
            if (updateAll) {
              return [3, item[rand_int_item]];
            } else {
              updateAttributes(3, item[rand_int_item]);
            }
            done_item = true;
          }
          rand_int_item = getRandomInt(item);
        }
        break;
      case "Weapon":
        let rand_int_weapon = getRandomInt(weapon);
        let done_weapon = false;
        while (!done_weapon) {
          if (attr[1] !== weapon[rand_int_weapon]) {
            if (updateAll) {
              return [4, weapon[rand_int_weapon]];
            } else {
              updateAttributes(4, weapon[rand_int_weapon]);
            }
            done_weapon = true;
          }
          rand_int_weapon = getRandomInt(weapon);
        }
        break;
      case "Headwear":
        let rand_int_headwear = getRandomInt(headwear);
        let done_headwear = false;
        while (!done_headwear) {
          if (attr[1] !== headwear[rand_int_headwear]) {
            if (updateAll) {
              return [5, headwear[rand_int_headwear]];
            } else {
              updateAttributes(5, headwear[rand_int_headwear]);
            }
            done_headwear = true;
          }
          rand_int_headwear = getRandomInt(headwear);
        }
        break;
      case "Armor":
        let rand_int_armor = getRandomInt(armor);
        let done_armor = false;
        while (!done_armor) {
          if (attr[1] !== armor[rand_int_armor]) {
            if (updateAll) {
              return [6, armor[rand_int_armor]];
            } else {
              updateAttributes(6, armor[rand_int_armor]);
            }
            done_armor = true;
          }
          rand_int_armor = getRandomInt(armor);
        }
        break;
      case "Footwear":
        let rand_int_footwear = getRandomInt(footwear);
        let done_footwear = false;
        while (!done_footwear) {
          if (attr[1] !== footwear[rand_int_footwear]) {
            if (updateAll) {
              return [7, footwear[rand_int_footwear]];
            } else {
              updateAttributes(7, footwear[rand_int_footwear]);
            }
            done_footwear = true;
          }
          rand_int_footwear = getRandomInt(footwear);
        }
        break;
      default:
        console.log("not clan");
    }
  };

  const randomizeAll = () => {
    let res: any[] = [];
    attributes.forEach((x, i) => res.push(handleBadgeClick(x, true)));

    let items = [...attributes];
    res.forEach((x, i) => {
      let item = { ...items[x[0]] };
      item[1] = x[1];
      items[x[0]] = item;
    });
    setAttributes(items);
  };
  return (
    <div style={{ marginTop: "100px" }} className="text-white BadgeAttributes">
      <div>
        <GmButton
          onClick={randomizeAll}
          className="mx-auto d-flex align-items-center mb-4 bg-transparent"
        >
          <span className="mx-1">gm</span> <span className="mx-1">🤝</span>
        </GmButton>
      </div>
      <div className="mb-3 mt-3 pt-3">example traits:</div>
      {attributes.map((attr, idx) => (
        <Badge
          key={idx}
          bg="transparent"
          onClick={() => handleBadgeClick(attr, false)}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            userSelect: "none",
            borderRadius: "10px",
            border: "1px solid white",
          }}
          className="mx-2 mb-4"
        >
          <div className="mb-2" style={{ color: "grey" }}>
            {attr[0].toUpperCase()}
          </div>
          <div style={{ fontSize: "1.2em" }}>{attr[1]}</div>
        </Badge>
      ))}
    </div>
  );
};

export default ImageDisplay;
