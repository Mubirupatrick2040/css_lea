(function() {
    var _ = self.Life = function(seed) {
        this.seed = seed;
        this.height = seed.length;
        this.width = seed[0].length;

        this.prevBoard = seed.slice().map(function(row) { return row.slice(); });
    };
})();

var game = new Life([
    [0, 0, 0, 0, 0]
    [0, 0, 1, 0, 0]
    [0, 0, 1, 0, 0]
    [0, 0, 1, 0, 0]
    [0, 0, 0, 0, 0]
]);