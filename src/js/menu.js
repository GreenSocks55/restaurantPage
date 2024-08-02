import { create, appendArray } from "./common.js";

export default function renderMenu() {
  let content = document.querySelector("#content");
  content.innerHTML = ``;

  content.innerHTML = `
    <div class="menu-content">
    <h3>What would you like to have today?</h3>
    <span class="break"></span>

    <table class="foodListHeavy">
        <h4>Heavy</h4>
        <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Chicken Momo</td>
            <td>Rs.150</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Buff Momo</td>
            <td>Rs.140</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Sea Momo</td>
            <td>Rs.180</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Veg Momo</td>
            <td>Rs.120</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Chicken Chowmein</td>
            <td>Rs.160</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Buff Chowmein</td>
            <td>Rs.140</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Veg Chowmein</td>
            <td>Rs.120</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Egg Chowmein</td>
            <td>Rs.130</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Standard Salad</td>
            <td>Rs.160</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Chicken Pizza</td>
            <td>Rs.250</td>
        </tr>
        <tr>
            <td>11</td>
            <td>Buff Pizza</td>
            <td>Rs.230</td>
        </tr>
        <tr>
            <td>12</td>
            <td>Plain pizza (tomato)</td>
            <td>Rs.160</td>
        </tr>
        <tr>
            <td>13</td>
            <td>Chicken Burger</td>
            <td>Rs.180</td>
        </tr>
        <tr>
            <td>14</td>
            <td>Buff Burger</td>
            <td>Rs.160</td>
        </tr>
    </table>

    <span class="break"></span>

    <table class="foodListLight">
        <h4>Light</h4>
        <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>1</td>
            <td>French Fries</td>
            <td>Rs.150</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Toast with eggs</td>
            <td>Rs.100</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Fruits mix</td>
            <td>Rs.120</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Ice Cream Balls</td>
            <td>Rs.180</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Butter cake</td>
            <td>Rs.140</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Chocolate Cake</td>
            <td>Rs.160</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Vanilla Cake</td>
            <td>Rs.140</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Yogurt Scoop</td>
            <td>Rs.100</td>
        </tr>
    </table>

    <span class="break"></span>

    <table class="foodListDrink">
        <h4>Drinks</h4>
        <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Milk Coffee</td>
            <td>Rs.120</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Black Coffee</td>
            <td>Rs.80</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Milk tea</td>
            <td>Rs.120</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Latte</td>
            <td>Rs.180</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Iced Latte</td>
            <td>Rs.180</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Expresso</td>
            <td>Rs.200</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Americano</td>
            <td>Rs.200</td>
        </tr>
        <tr>
            <td>8</td>
            <td>CocaCola/Fanta/Sprite</td>
            <td>Rs.100</td>
        </tr>
    </table>
</div>`;
}
