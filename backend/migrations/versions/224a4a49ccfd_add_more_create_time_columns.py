"""add more create time columns

Revision ID: 224a4a49ccfd
Revises: 2378c391d209
Create Date: 2019-12-01 23:19:09.942156

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '224a4a49ccfd'
down_revision = '2378c391d209'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('response', sa.Column('created_date', sa.DateTime(), nullable=True))
    op.add_column('user', sa.Column('created_date', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'created_date')
    op.drop_column('response', 'created_date')
    # ### end Alembic commands ###