// Mock data

export const db = {
  // Tags
  tags: [
    { id: "1", name: "School" },
    { id: "2", name: "Tech" },
    { id: "3", name: "Spiritual" },
  ],

  // Notes
  notes: [
    {
      id: "1",
      title: "GraphQL",
      content: "About GraphQL contents",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: [{ id: "2" }],
    },
    {
      id: "2",
      title: "Strategic Information System",
      content: "George and Kajal",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: [{ id: "1" }, { id: "2" }],
    },
    {
      id: "3",
      title: "The Blessed Merciful",
      content: "Pastor Peter - CCI SE London",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: [{ id: "3" }],
    },
  ],
};
