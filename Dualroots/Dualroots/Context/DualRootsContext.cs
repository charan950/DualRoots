using System;
using System.Collections.Generic;
using Dualroots.Models;
using Microsoft.EntityFrameworkCore;

namespace Dualroots.Context;

public partial class DualRootsContext : DbContext
{
    public DualRootsContext()
    {
    }

    public DualRootsContext(DbContextOptions<DualRootsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Design> Designs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=TL432;Database=DualRoots;Trusted_Connection=True;Integrated Security=True;Encrypt=False;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Design>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Design__3214EC27AF0BC9A2");

            entity.ToTable("Design");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Class).IsUnicode(false);
            entity.Property(e => e.Comment).IsUnicode(false);
            entity.Property(e => e.CommentOn).IsUnicode(false);
            entity.Property(e => e.Date).HasColumnType("date");
            entity.Property(e => e.EditableColumns).IsUnicode(false);
            entity.Property(e => e.EditableField)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.File).IsUnicode(false);
            entity.Property(e => e.Index)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.MandatroyColumns).IsUnicode(false);
            entity.Property(e => e.Subject).IsUnicode(false);
            entity.Property(e => e.Type).IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
