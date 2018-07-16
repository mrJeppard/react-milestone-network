/**
 * Created by duncan on 7/9/18.
 */

export const data = {
    milestones:
        [
            {id: "milestone-1", x: 300, y: 200, color:"green"},
            {id: "milestone-2", x: 400, y: 300, color:"magenta"},
            {id: "milestone-3", x: 525, y: 299, color:"lightblue"},
            {id: "milestone-4", x: 650, y: 300, color:"blue"},
            {id: "milestone-5", x: 401, y: 401, color:"orange"},
            {id: "milestone-6", x: 301, y: 500, color:"red"},
            {id: "milestone-7", x: 500, y: 500, color:"yellow"}
        ],
    links :
        [
            {source: "milestone-1", target: "milestone-2", orderId: undefined},
            {source: "milestone-2", target: "milestone-3", orderId: undefined},
            {source: "milestone-3", target: "milestone-4", orderId: undefined},
            {source: "milestone-2", target: "milestone-5", orderId: undefined},
            {source: "milestone-5", target: "milestone-6", orderId: undefined},
            {source: "milestone-5", target: "milestone-7", orderId: undefined},
        ],
    samples : [
        {
            milestones: ["milestone-1", "milestone-2"],
            percentages: [1, 0],
            color: "black"
        },
        {
            milestones: ["milestone-1", "milestone-2"],
            percentages: [0, 1],
            color: "black"
        },
        {
            milestones: ["milestone-1", "milestone-2"],
            percentages: [.92, .08],
            color: "black"
        },

        {
            milestones: ["milestone-1", "milestone-2"],
            percentages: [.75, .25],
            color: "black"
        },

        {
            milestones: ["milestone-1", "milestone-2"],
            percentages: [.70, .30],
            color: "black"
        },
        {
            milestones: ["milestone-1", "milestone-2"],
            percentages: [.62, .38],
            color: "black"
        },

        {
            milestones: ["milestone-1", "milestone-2"],
            percentages: [.33, .77],
            color: "black"
        },
        {
            milestones: ["milestone-1", "milestone-2"],
            percentages: [.32, .78],
            color: "black"
        },
        {
            milestones: ["milestone-1", "milestone-2"],
            percentages: [.30, .70],
            color: "black"
        },
        {
            milestones: ["milestone-1", "milestone-2"],
            percentages: [.30, .70],
            color: "black"
        },
        {
            milestones: ["milestone-5", "milestone-6", "milestone-7"],
            percentages: [0, 0, 1],
            color: "black"
        },

        {
            milestones: ["milestone-5", "milestone-6", "milestone-7"],
            percentages: [0, 1, 0],
            color: "black"
        },
        {
            milestones: ["milestone-5", "milestone-6", "milestone-7"],
            percentages: [1, 0, 0],
            color: "black"
        },
        {
            milestones: ["milestone-5", "milestone-6", "milestone-7"],
            percentages: [.33, .34, .33],
            color: "black"
        },
        {
            milestones: ["milestone-5", "milestone-6", "milestone-7"],
            percentages: [.75, .25, 0],
            color: "black"
        },

            {
                milestones: ["milestone-3", "milestone-2"],
                percentages: [1, 0],
                color: "black"
            },
            {
                milestones: ["milestone-3", "milestone-2"],
                percentages: [0, 1],
                color: "black"
            },

            {
                milestones: ["milestone-3", "milestone-2"],
                percentages: [.33, .67],
                color: "black"
            },
    ]
}