using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace inve
{
    [TestClass]
    public class UnitTest1_Fibonacci
    {
        [DataRow(1, 1)]
        [DataRow(13, 233)]
        [DataRow(20, 6765)]
        [DataTestMethod]
        public void TestMethod1(int n, int expected)
        {
            var Fiboo = new Fibonacci();

            var actual = Fiboo.Fib(n);

            Assert.AreEqual(expected, actual);
        }
    }
}
