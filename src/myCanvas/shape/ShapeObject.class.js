class ShapeObject {
    constructor(left, right, top, bottom) {
        if (new.target === ShapeObject) {
            throw new Error('ShapeObject cannot be directly instantiated');
        }
        this.ctx = null;
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
        this.shape = 'object';  // 图元形状
        this.fill = false; // 是否充满
        this.color = '#000000'; // 该图元的颜色
        this.isSelected = false; // 当前图元是否正在被选中
    }
    // 绘制选中状态的边框
    drawRectFrame() {
        this.ctx.strokeStyle = 'blue';
        this.ctx.beginPath();
        this.ctx.moveTo(this.left - 4, this.top - 4);
        this.ctx.lineTo(this.left - 4, this.bottom + 4);
        this.ctx.lineTo(this.right + 4, this.bottom + 4);
        this.ctx.lineTo(this.right + 4, this.top - 4);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fillStyle = 'black';
        this.ctx.beginPath();
        this.ctx.ellipse(this.left - 4, this.top - 4, 4, 4, 0, 0, 4 * Math.PI);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.ellipse(this.left - 4, this.bottom + 4, 4, 4, 0, 0, 4 * Math.PI);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.ellipse(this.right + 4, this.top - 4, 4, 4, 0, 0, 4 * Math.PI);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.ellipse(this.right + 4, this.bottom + 4, 4, 4, 0, 0, 4 * Math.PI);
        this.ctx.fill();
    }
    // 绘制前的操作
    draw() {
        if (this.isSelected) {
            this.drawRectFrame();
        }
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.color;
    }
    setColor(color) {
        this.color = color;
    }
    catch(x, y) {
        if (x > this.left && x < this.right && y > this.top && y < this.bottom) {
            return true;
        }
        else {
            return false;
        }
    }
    setRect(left, right, top, bottom) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }
}
export default ShapeObject;