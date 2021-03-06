"""poll creation time

Revision ID: 2378c391d209
Revises: bfc5334a2ecd
Create Date: 2019-12-01 23:13:46.509418

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2378c391d209'
down_revision = 'bfc5334a2ecd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('poll', sa.Column('created_date', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('poll', 'created_date')
    # ### end Alembic commands ###
