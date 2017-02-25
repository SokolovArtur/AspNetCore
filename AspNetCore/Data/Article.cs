using System.ComponentModel.DataAnnotations;

namespace AspNetCore.Data
{
    public class Article
    {
        public int Id { get; set; }

        [Required]
        [StringLength(250, MinimumLength = 3)]
        public string Title { get; set; }

        [StringLength(4000)]
        [DataType(DataType.MultilineText)]
        public string Text { get; set; }
    }
}
