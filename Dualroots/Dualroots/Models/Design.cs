using System;
using System.Collections.Generic;

namespace Dualroots.Models;

public partial class Design
{
    public int Id { get; set; }

    public int? CommentId { get; set; }

    public string? Index { get; set; }

    public string? Subject { get; set; }

    public string Comment { get; set; } = null!;

    public string CommentOn { get; set; } = null!;

    public string File { get; set; } = null!;

    public string Class { get; set; } = null!;

    public string Type { get; set; } = null!;

    public string? EditableField { get; set; }

    public DateTime? Date { get; set; }

    public int? IsMandatory { get; set; }

    public string? EditableColumns { get; set; }

    public string? MandatroyColumns { get; set; }
}
