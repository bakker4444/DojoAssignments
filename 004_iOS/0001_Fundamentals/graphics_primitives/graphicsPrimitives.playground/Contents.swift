import UIKit

struct Point {
    var X, Y : Double
}

struct Line {
    var start, end: Point
    func lineLength() -> Double {
        return sqrt(pow(self.start.X-self.end.X, 2) + pow(self.start.Y-self.end.Y, 2))
    }
}

// Problem 1

var p1 = Point(X: 0, Y: 0)
var p2 = Point(X: 3, Y: 4)
var line1 = Line(start: p1, end: p2)
print(line1.lineLength())


struct Triangle {
    var Points : [Point]
    func triangleArea() -> Double {
        let mat0 = Points[0].X*(Points[1].Y-Points[2].Y)
        let mat1 = Points[1].X*(Points[0].Y-Points[2].Y)
        let mat2 = Points[2].X*(Points[0].Y-Points[1].Y)
        let result = (1/2) * abs(mat0-mat1+mat2)
        return result
    }
}

// Problem 2

var p3 = Point(X: 0, Y: 1)
var p4 = Point(X: 11, Y: -2)
var p5 = Point(X:-7, Y:-5)
var points1 = [p3, p4, p5]
var tri1 = Triangle(Points: points1)

print(tri1.triangleArea())

// (cf)
//                                   x0   x1   x2
// Triangle Area = 1/2 * abs( det (  y0   y1   y2  ) )
//                                    1    1    1
//
//               = (1/2) * abs( x0*(y1-y2) - x1(y0-y2) + x2(y0-y1) )
//               = (1/2) * abs( x0y1 + x1y2 + x2y0 - x0y2 - x1y0 - x2y1 )

